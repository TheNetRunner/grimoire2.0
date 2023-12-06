import { Injectable, inject } from '@angular/core';
import { Observable, liveQuery } from "dexie";
import { v4 as uuidv4 } from "uuid";

import { DatabaseService } from '../../shared/services/database.service';
import { ShadowRunCharacter } from '../models/shadow-run.model';
import { newCharacterObject } from '../data/newCharacter.data';

const SHADOW_RUN_CHARACTERS_TABLE_NAME = "shadowRunCharacters";

@Injectable({
  providedIn: 'root'
})
export class ShadowRunCharactersService {
    databaseService = inject(DatabaseService);

    // Create
    async createCharacter(): Promise<void> {
        const newId = await this.generateId();
        const newCharacter = {...newCharacterObject, id: newId }

        this.addCharacterToDatabase(newCharacter);
    }

    async addCharacterToDatabase(character: ShadowRunCharacter): Promise<void> {
        this.databaseService.addItem(SHADOW_RUN_CHARACTERS_TABLE_NAME, character, character.id);
    }

    // Read
    getCharacters(): Observable<ShadowRunCharacter[]> {
        return liveQuery(() => this.databaseService.getItems(SHADOW_RUN_CHARACTERS_TABLE_NAME));
    }

    getCharacter(id: string): Observable<ShadowRunCharacter> {
        return liveQuery(() => this.databaseService.getItemById(SHADOW_RUN_CHARACTERS_TABLE_NAME, id))
    }

    // Update

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
