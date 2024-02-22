import { Injectable, inject } from '@angular/core';
import { Observable, liveQuery } from "dexie";

import { DatabaseService } from '../../shared/services/database.service';
import { Shadowrun5ECharacterData } from '../character/interfaces/shadowrun-5e-character-data.interface';
import { characterObject } from '../character/data/new-character.data';

const SHADOW_RUN_CHARACTERS_TABLE_NAME = "shadowRun5ECharacters";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
    databaseService = inject(DatabaseService);

    // Create
    async createCharacter(): Promise<string> {
        const newId = await this.generateUniqueId(16);
        const newCharacter = {...characterObject, id: newId}

        this.addCharacterToDatabase(newCharacter);

        return newId;
    }

    async copyCharacter(characterCopy: Shadowrun5ECharacterData): Promise<string> {
        const newId = await this.generateUniqueId(16);
        const newCharacter = {
            ...characterCopy, 
            id: newId, 
            name: `${characterCopy.basic.name} (Copy)`
        }

        this.addCharacterToDatabase(newCharacter);

        return newId;
    }

    async addCharacterToDatabase(character: Shadowrun5ECharacterData): Promise<void> {
        this.databaseService.addItem(SHADOW_RUN_CHARACTERS_TABLE_NAME, character, character.id);
    }

    // Read
    getCharacters(): Observable<Shadowrun5ECharacterData[]> {
        return liveQuery(() => this.databaseService.getItems(SHADOW_RUN_CHARACTERS_TABLE_NAME));
    }

    getCharacter(id: string): Observable<Shadowrun5ECharacterData> {
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

    private async generateUniqueId(length: number): Promise<string> {
        let newId;
        let doesIdExist;

        do {
            newId = this.generateId(length);
            doesIdExist = await this.databaseService.verifyIdExistsInTable(SHADOW_RUN_CHARACTERS_TABLE_NAME, newId);
        } while (doesIdExist)

        return newId;
    }

    private generateId(length: number): string {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let newId = "";

        for (let i = 0; i < length; i++) {
            newId += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return newId;
    }
}
