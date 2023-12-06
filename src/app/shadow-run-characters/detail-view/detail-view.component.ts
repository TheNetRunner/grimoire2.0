import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShadowRunCharactersService } from '../services/shadow-run-characters.service';
import { ShadowRunCharacter } from '../models/shadow-run.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.css'
})
export class DetailViewComponent implements OnInit {
    activedRoute = inject(ActivatedRoute);
    router = inject(Router);
    shadowRunCharacterService = inject(ShadowRunCharactersService);

    characterId!: string;
    character!: ShadowRunCharacter

    ngOnInit() {
        this.setCharacter();
    }

    setCharacter(): void {
        this.activedRoute.params.subscribe((params) => {
            this.characterId = params['id'];

            if(this.characterId) {
                this.shadowRunCharacterService.getCharacter(this.characterId).subscribe((character: ShadowRunCharacter) => {

                    if (character){
                        this.character = character
                    } else {
                        this.router.navigate(['shadow-run', 'characters']);
                    }
                });
            }
        });
    }
}
