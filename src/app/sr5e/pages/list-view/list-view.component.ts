import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { DeleteCharacterComponent } from '../../modals/delete-character/delete-character.component';
import { ShadowRun5ECharacterData } from '../../models/new-character.interface';
import { NewDataStoreService } from '../../services/new-data-store.service';




@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {
    modalService = inject(NgbModal);
    newDataStoreService = inject(NewDataStoreService);

    characters: ShadowRun5ECharacterData[] = [];

    ngOnInit(): void {
        this.getCharacters();
    }

    getCharacters(): void {
        this.newDataStoreService.getCharacters().subscribe((characters: ShadowRun5ECharacterData[]) => {
            this.characters = characters;
        });
    }

    createCharacter(): void { 
        this.newDataStoreService.createCharacter();
    }

    copyCharacter(characterIndex: number): void {
        if (this.characters.length < 25) {
            const originalCharacter = this.characters[characterIndex];
            const characterCopy = {...originalCharacter, id: uuidv4(), name: `${originalCharacter.basic.name} copy`}

            this.newDataStoreService.addCharacterToDatabase(characterCopy);
        }
    }
    get totalCharacters(): number {
        return this.characters.length;
    }

    openDeleteCharacterModal(character: ShadowRun5ECharacterData): void {
        const modelRef = this.modalService.open(DeleteCharacterComponent);

        modelRef.componentInstance.character = character;

        modelRef.componentInstance.deleteCharacterEvent.subscribe((characterId: string) => {
            this.newDataStoreService.deleteCharacter(characterId);
        });
    }
}
