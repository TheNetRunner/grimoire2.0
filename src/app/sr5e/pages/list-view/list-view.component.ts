import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { DeleteCharacterComponent } from '../../modals/delete-character/delete-character.component';
import { DataStoreService } from '../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../models/character.model';




@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {
    modalService = inject(NgbModal);
    sr5eDatastoreService = inject(DataStoreService);

    characters: ShadowRun5ECharacter[] = [];

    ngOnInit(): void {
        this.getCharacters();
    }

    getCharacters(): void {
        this.sr5eDatastoreService.getCharacters().subscribe((characters: ShadowRun5ECharacter[]) => {
            this.characters = characters;
        });
    }

    createCharacter(): void { 
        this.sr5eDatastoreService.createCharacter();
    }

    copyCharacter(characterIndex: number): void {
        if (this.characters.length < 25) {
            const originalCharacter = this.characters[characterIndex];
            const characterCopy = {...originalCharacter, id: uuidv4(), name: `${originalCharacter.name} copy`}

            this.sr5eDatastoreService.addCharacterToDatabase(characterCopy);
        }
    }
    get totalCharacters(): number {
        return this.characters.length;
    }

    openDeleteCharacterModal(character: ShadowRun5ECharacter): void {
        const modelRef = this.modalService.open(DeleteCharacterComponent);

        modelRef.componentInstance.character = character;

        modelRef.componentInstance.deleteCharacterEvent.subscribe((characterId: string) => {
            this.sr5eDatastoreService.deleteCharacter(characterId);
        });
    }
}
