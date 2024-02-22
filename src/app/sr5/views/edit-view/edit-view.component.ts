import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { DataStoreService } from '../../services/data-store.service';
import { EDITOR_STEPS } from '../../common/constants';
import { Shadowrun5ECharacterData } from '../../character/interfaces/shadowrun-5e-character-data.interface';
import { Shadowrun5ECharacter } from '../../character/shadowrun-5e-character';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrl: './edit-view.component.css'
})
export class EditViewComponent implements OnInit {
    private dataStoreService = inject(DataStoreService);
    private activedRoute = inject(ActivatedRoute);
    private router = inject(Router);

    currentEditorStep: string = "concept";
    character!: Shadowrun5ECharacter;

    ngOnInit(): void {
        this.initEditor();
    }

    ngOnChanges(): void {
        console.log(this.character);
    }

    initEditor(): void {
		this.activedRoute.queryParams.subscribe((queryParams) => {
			const providedStep = queryParams["step"];
			if (EDITOR_STEPS.includes(providedStep)) {
				this.currentEditorStep = providedStep;
                this.setCharacter();
			} else {
				this.redirectToListView();
			}
		});
	}

    setCharacter(): void {
        this.activedRoute.params.subscribe((params: Params) => {
            const characterIdParam = params['id']

            this.dataStoreService.getCharacter(characterIdParam).subscribe(
                (characterData: Shadowrun5ECharacterData) => {
                    if(characterData) {
                        this.character = new Shadowrun5ECharacter(characterData);
                    } else {
                        this.redirectToListView()
                    }
                }
            );
        });
    }

    redirectToListView(): void {
		this.router.navigate(["sr5e", "runners"]);
	}
}
