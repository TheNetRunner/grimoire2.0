import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DeleteComponent } from '../../components/modals/delete/delete.component';
import { ShadowRun5ECharacterData } from '../../character/interfaces/character.interface';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {
    private modalService = inject(NgbModal);
    private dataStoreService = inject(DataStoreService);
    private router = inject(Router);

    characters: ShadowRun5ECharacterData[] = [];

    ngOnInit() {
        this.getCharacters();
    }

    getCharacters(): void {
        this.dataStoreService.getCharacters().subscribe((characters: ShadowRun5ECharacterData[]) => {
            this.characters = characters;
        });
    }

    async createCharacter(): Promise<void> { 
        const newCharacterId = await this.dataStoreService.createCharacter();

        this.router.navigate(
            ["sr5", "characters", newCharacterId, "edit"], { queryParams: { step: "concept" } });
    }

    copyCharacter(characterId: string): void {
        const copy = this.characters.find(
            character => character.id === characterId);

        if (copy) {
            this.dataStoreService.copyCharacter(copy);
        }
    }

    openDeleteCharacterModal(characterId: string): void {
        const modalRef = this.modalService.open(DeleteComponent, 
            { animation: true, centered: true } 
        );

        modalRef.componentInstance.characterId = characterId;
        modalRef.componentInstance.characterName = this.getCharacterNameBydId(characterId);

        modalRef.componentInstance.deleteCharacterEvent.subscribe(() => {
            this.deleteCharacter(characterId);
        })
    }
    
    deleteCharacter(characterId: string): void {
        this.dataStoreService.deleteCharacter(characterId);
    }

    getCharacterNameBydId(characterId: string): string | undefined {
        const character = this.characters.find(character => character.id === characterId);
        
        if (character) {
            return character.basic.name;
        }

        return undefined;
    }

}
