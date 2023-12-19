import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';

import { ShadowRun5ECharacter } from '../../models/new-character.model';
import { CharacterService } from '../../services/character.service';
import { LevelOfPlayName } from '../../models/priority.model';
import { RoleName } from '../../models/character.model';



@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrl: './concept-step.component.css'
})
export class ConceptStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private characterService = inject(CharacterService);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter

    roleOptions: string[] = Object.values(RoleName);
    levelsOfPlay: LevelOfPlayName[] = Object.values(LevelOfPlayName);
    
    personalInfoForm!: FormGroup;
    gameSettingsForm!: FormGroup;
    bioForm!: FormGroup;
    magicUserTypeForm!: FormGroup;

    ngOnInit(): void {
        this.generateForms();
    }

    generateForms(): void {
        this.generatePersonalInfoForm();
        this.generateGameSettingsForm();
        this.generateBioForm();
    }

    generatePersonalInfoForm(): void {
        this.personalInfoForm = this.formBuilder.group({
            name: [this.character.basic.name, [Validators.required, Validators.minLength(3)]],
            role: [this.character.basic.role, [Validators.required]],
            ethnicity: [this.character.basic.ethnicity],
            age: [this.character.basic.age],
            gender: [this.character.basic.gender],
            eyes: [this.character.basic.eyes],
            hair: [this.character.basic.hair],
            height: [this.character.basic.height],
            weight: [this.character.basic.weight],
            streetCred: [this.character.basic.streetCred],
            notoriety: [this.character.basic.notoriety],
            publicAwareness: [this.character.basic.publicAwareness],
            misc: [this.character.basic.misc],
        });

        this.personalInfoForm.valueChanges.subscribe((formData: any) => {
            if(this.personalInfoForm.valid) {
                const update = {...this.character.basic, ...formData};
                this.dataStoreService.updateCharacter(this.character.id, update);
            }
        });
    }

    generateGameSettingsForm(): void {
        this.gameSettingsForm = this.formBuilder.group({
            levelOfPlay: [this.character.settings.levelOfPlay]
        });

        this.gameSettingsForm.valueChanges.subscribe((formData: any) => {
            const update = {...this.character.settings, ...formData};
            this.dataStoreService.updateCharacter(this.character.id, update);
        });
    }

    generateBioForm(): void {
        this.bioForm = this.formBuilder.group({
            bio: [this.character.basic.bio]
        })

        this.bioForm.valueChanges.subscribe((formData: any) => {
            if(this.bioForm.valid) {
                const update = {...this.character.basic, bio: formData.bio};
                this.dataStoreService.updateCharacter(this.character.id, update);
            }
        });

    }

    get isNameFieldValid(): boolean | undefined {
        return this.personalInfoForm.get("name")?.valid;
    }

    get hasNameFieldBeenTouched(): boolean | undefined {
        return this.personalInfoForm.get("name")?.touched;
    }

}
