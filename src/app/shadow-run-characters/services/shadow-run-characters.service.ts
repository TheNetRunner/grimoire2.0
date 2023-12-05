import { Injectable, inject } from '@angular/core';

import { DatabaseService } from '../../shared/services/database.service';

const SHADOW_RUN_CHARACTERS_TABLE_NAME = "shadowRunCharacters";

@Injectable({
  providedIn: 'root'
})
export class ShadowRunCharactersService {
    shadowRunCharactesrDatabaseService = inject(DatabaseService);

    // Create

    // Read

    // Update

    // Delete
    deleteCharacter(characterId: string): void {
        this.shadowRunCharactesrDatabaseService.deleteItem(SHADOW_RUN_CHARACTERS_TABLE_NAME, characterId);
    }
}
