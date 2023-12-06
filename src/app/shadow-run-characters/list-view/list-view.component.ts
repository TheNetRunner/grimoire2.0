import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { fakeCharacters } from '../data/fakeCharacters.data';
import { ShadowRunCharacter } from '../models/shadow-run.model';
import { DeleteCharacterModalComponent } from '../components/delete-character-modal/delete-character-modal.component';
import { ShadowRunCharactersService } from '../services/shadow-run-characters.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {
    modalService = inject(NgbModal);
    shadowRunCharacterService = inject(ShadowRunCharactersService);

    characters: ShadowRunCharacter[] = [];

    ngOnInit(): void {
        this.getCharacters();
    }

    getCharacters(): void {
        this.shadowRunCharacterService.getCharacters().subscribe((characters: ShadowRunCharacter[]) => {
            this.characters = characters;
        });
    }

    createCharacter(): void { 
        this.shadowRunCharacterService.createCharacter();
    }

    copyCharacter(characterIndex: number): void {
        if (this.characters.length < 25) {
            const originalCharacter = this.characters[characterIndex];
            const characterCopy = {...originalCharacter, id: uuidv4(), name: `${originalCharacter.name} copy`}

            this.shadowRunCharacterService.addCharacterToDatabase(characterCopy);
        }
    }
    get totalCharacters(): number {
        return this.characters.length;
    }

    openDeleteCharacterModal(character: ShadowRunCharacter): void {
        const modelRef = this.modalService.open(DeleteCharacterModalComponent);

        modelRef.componentInstance.character = character;

        modelRef.componentInstance.deleteCharacterEvent.subscribe((characterId: string) => {
            this.shadowRunCharacterService.deleteCharacter(characterId);
        });
    }
}
