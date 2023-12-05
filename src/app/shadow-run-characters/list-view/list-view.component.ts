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

    characters: any[] = fakeCharacters;

    copyCharacter(characterIndex: number): void {
        if (this.characters.length < 25) {
            let characterCopy = this.characters[characterIndex];
            characterCopy.id = uuidv4();
            characterCopy.name = `${characterCopy.name} copy`

            this.characters.push(characterCopy);
            this.addCharacterToDatabase(characterCopy);
        }
    }

    getRandomBackgroundImage(): any {
        const choices = ["one", "two", "three", "four"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        const choice = choices[randomIndex];

        return { "background-image": `url(../../../assets/imgs/shadow-run/character_background_${choice}.png)` }
    }

    get totalCharacters(): number {
        return this.characters.length;
    }

    openDeleteCharacterModal(characterId: string): void {
        const modelRef = this.modalService.open(DeleteCharacterModalComponent);

        modelRef.componentInstance.characterId = characterId;

        modelRef.componentInstance.deleteCharacterEvent.subscribe((characterId: string) => {
            this.shadowRunCharacterService.deleteCharacterFromDatabase(characterId);
        });
    }

    deleteCharacter(characterId: string): void {
        this.shadowRunCharacterService.deleteCharacterFromDatabase(characterId);
    }

   addCharacterToDatabase(character: ShadowRunCharacter): void {
        console.log(character);
    }

}
