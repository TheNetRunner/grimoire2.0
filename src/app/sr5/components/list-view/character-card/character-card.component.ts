import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent implements OnInit {

    @Input() character: any;
    @Output() copyCharacterEvent = new EventEmitter<any>();
    @Output() deleteCharacterEvent = new EventEmitter<string>();

    characterImageUrl: string = "assets/imgs/shadow-run/place_holder.png";
    roleImageUrl: string = "";

    ngOnInit(): void {
        this.setImages();
    }

    setImages(): void {
        this.characterImageUrl = `assets/imgs/shadow-run/portraits/${this.character.imageName}.png`;
        this.roleImageUrl = `assets/imgs/shadow-run/city-backgrounds/city_background_${this.randomTextNumber()}.png`;
    }

    randomTextNumber(): string {
        const choices = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
        const index = Math.floor(Math.random() * 4)

        return choices[index];
    }

    emitCopyCharacterEvent(): void {
        this.copyCharacterEvent.emit(this.character.id);
    }

    emitDeleteCharacterEvent(): void {
        this.deleteCharacterEvent.emit(this.character.id);
    }

}
