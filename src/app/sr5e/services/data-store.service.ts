import { Injectable, inject } from '@angular/core';
import { Observable, liveQuery } from "dexie";
import { v4 as uuidv4 } from "uuid";

import { DatabaseService } from '../../shared/services/database.service';
import { ShadowRun5ECharacterData } from '../models/character.interface'
import { characterObject } from '../data/character-object.data';

const SHADOW_RUN_CHARACTERS_TABLE_NAME = "shadowRun5ECharacters";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
    databaseService = inject(DatabaseService);

    // Create
    async createCharacter(): Promise<void> {
        const newId = await this.generateId();
        const newCharacter = {...characterObject, id: newId}

        this.addCharacterToDatabase(newCharacter);
    }

    async addCharacterToDatabase(character: ShadowRun5ECharacterData): Promise<void> {
        this.databaseService.addItem(SHADOW_RUN_CHARACTERS_TABLE_NAME, character, character.id);
    }

    // Read
    getCharacters(): Observable<ShadowRun5ECharacterData[]> {
        return liveQuery(() => this.databaseService.getItems(SHADOW_RUN_CHARACTERS_TABLE_NAME));
    }

    getCharacter(id: string): Observable<ShadowRun5ECharacterData> {
        return liveQuery(() => this.databaseService.getItemById(SHADOW_RUN_CHARACTERS_TABLE_NAME, id))
    }

    // Update
    updateCharacter(characterId: string, characterUpdates: any): void {
        this.databaseService.updateItem(SHADOW_RUN_CHARACTERS_TABLE_NAME, characterId, characterUpdates);
    }

    // Delete
    deleteCharacter(characterId: string): void { 
        this.databaseService.deleteItem(SHADOW_RUN_CHARACTERS_TABLE_NAME, characterId);
    }

    private async generateId(): Promise<string> {
        let newId = uuidv4();
        let doesIdExist = await this.databaseService.verifyIdExistsInTable(SHADOW_RUN_CHARACTERS_TABLE_NAME, newId);

        while (doesIdExist) {
            newId = uuidv4();
            doesIdExist = await this.databaseService.verifyIdExistsInTable(SHADOW_RUN_CHARACTERS_TABLE_NAME, newId);
        }

        return newId;
    }
}
