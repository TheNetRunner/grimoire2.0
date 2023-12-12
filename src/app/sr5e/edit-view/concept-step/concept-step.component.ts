import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';

import { ShadowRun5ECharacter } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';


@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrl: './concept-step.component.css'
})
export class ConceptStepComponent {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);
    private characterService = inject(CharacterService);

    @Input() character!: ShadowRun5ECharacter

    personalInfoForm!: FormGroup;
    gameSettingsForm!: FormGroup;
    bioForm!: FormGroup;

    metaTypeOptions: string[] = [];

    ngOnInit() {
        this.generateForms();
    }

    generateForms() {
        this.generatePersonalInfoForm();
        this.generateGameSettingsForm();
        this.generateBioForm();
    }

    generatePersonalInfoForm(): void {
        this.personalInfoForm = this.formBuilder.group({
            name: [this.character.name, [Validators.required, Validators.minLength(3)]],
            role: [this.character.role, [Validators.required]],
            ethnicity: [this.character.ethnicity],
            age: [this.character.age],
            gender: [this.character.gender],
            height: [this.character.height],
            weight: [this.character.weight],
            streetCred: [this.character.streetCred],
            notoriety: [this.character.notoriety],
            publicAwareness: [this.character.publicAwareness],
            misc: [this.character.misc],
        });

        this.personalInfoForm.valueChanges.subscribe((formData: any) => {
            if(this.personalInfoForm.valid) {
                this.dataStoreService.updateCharacter(this.character.id, formData);
            }
        });
    }

    generateGameSettingsForm(): void {
        this.gameSettingsForm = this.formBuilder.group({
            levelOfPlay: [this.character.levelOfPlay]
        });

        this.gameSettingsForm.valueChanges.subscribe((formData: any) => {
            if(this.gameSettingsForm.valid) {
                this.dataStoreService.updateCharacter(this.character.id, formData);
            }
        });
    }

    generateBioForm(): void {
        this.bioForm = this.formBuilder.group({
            bio: [this.character.bio]
        })

        this.bioForm.valueChanges.subscribe((formData: any) => {
            if(this.bioForm.valid) {
                this.dataStoreService.updateCharacter(this.character.id, formData);
            }
        });

    }

    handleRoleChange(formData: any): void {
        let updates = formData;
        
    }

    get isNameFieldValid(): boolean | undefined {
        return this.personalInfoForm.get("name")?.valid;
    }

    get hasNameFieldBeenTouched(): boolean | undefined {
        return this.personalInfoForm.get("name")?.touched;
    }

}
