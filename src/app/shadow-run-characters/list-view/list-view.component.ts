import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { fakeCharacters } from '../data/fakeCharacters.data';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {
    characters: any[] = fakeCharacters;

    copyCharacter(characterIndex: number): void {
        if (this.characters.length < 25) {
            let characterCopy = this.characters[characterIndex];
            characterCopy.id = uuidv4()
            characterCopy.name = `${characterCopy.name} copy`

            this.characters.push(characterCopy);
        }
    }

    deleteCharacter(characterIndex: number): void {
        this.characters.splice(characterIndex, 1);
    }

    getRandomBackgroundImage(): any {
        const choices = ["one", "two", "three", "four"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        const choice = choices[randomIndex];
        console.log(choice);

        return { "background-image": `url(../../../assets/imgs/shadow-run/character_background_${choice}.png)` }
    }

    get totalCharacters(): number {
        return this.characters.length;
    }

}
