import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { DataStoreService } from '../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { ShadowRun5ECharacterData } from '../../models/character.interface';
import { EDITOR_STEPS } from '../../common/constants';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrl: './edit-view.component.css'
})
export class EditViewComponent {
    private activedRoute = inject(ActivatedRoute);
    private router = inject(Router);
    private dataStoreService = inject(DataStoreService);

    characterIdParam: string = "";
    editorSteps: string[] = EDITOR_STEPS;
    currentEditorStep: string = "concept";
    character!: ShadowRun5ECharacter;

    ngOnInit(): void {
        this.initEditor();
    }

    initEditor(): void {
		this.activedRoute.queryParams.subscribe((queryParams) => {
			const providedStep = queryParams["step"];
			if (this.editorSteps.includes(providedStep)) {
				this.currentEditorStep = providedStep;
				this.setCharacter();
			} else {
				this.redirect();
			}
		});
	}

    setCharacter(): void {
        this.activedRoute.params.subscribe((params: Params) => {
            this.characterIdParam = params['id']

            this.dataStoreService.getCharacter(this.characterIdParam).subscribe((characterData: ShadowRun5ECharacterData) => {

                if(characterData) {
                    this.character = new ShadowRun5ECharacter(characterData);
                } else {
                    this.router.navigate(['sr5e', 'characters']);
                }
                
            });
        });
    }

    redirect(): void {
		this.router.navigate(["sr5e", "characters"]);
	}
    

}
