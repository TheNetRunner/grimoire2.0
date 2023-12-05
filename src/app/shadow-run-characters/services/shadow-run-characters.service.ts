import { Injectable, inject } from '@angular/core';

import { ShadowRunCharactersDatabaseService } from './shadow-run-characters-database.service';

@Injectable({
  providedIn: 'root'
})
export class ShadowRunCharactersService {
    shadowRunCharactesrDatabaseService = inject(ShadowRunCharactersDatabaseService);

    // Create

    // Read

    // Update

    // Delete
    deleteCharacterFromDatabase(characterId: string): void {
        this.shadowRunCharactesrDatabaseService.deleteCharacter(characterId);
    }
}
