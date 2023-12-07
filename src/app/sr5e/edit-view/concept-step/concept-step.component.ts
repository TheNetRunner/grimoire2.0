import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShadowRun5ECharacter } from '../../models/character.inteface';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrl: './concept-step.component.css'
})
export class ConceptStepComponent {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject (DataStoreService);;

    @Input() character!: ShadowRun5ECharacter

    personalInfoForm!: FormGroup;
    gameSettingsForm!: FormGroup;
    bioForm!: FormGroup;

    metaTypeOptions: string[] = [];

    ngOnInit() {
        this.generateForms();
        this.setMetaTypeOptions();
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

    setMetaTypeOptions(): void {
        let options = ['human'];

        // code to get options goes here

        this.metaTypeOptions = options;
    }

    get isNameFieldValid(): boolean | undefined {
        return this.personalInfoForm.get("name")?.valid;
    }

    get hasNameFieldBeenTouched(): boolean | undefined {
        return this.personalInfoForm.get("name")?.touched;
    }

}
