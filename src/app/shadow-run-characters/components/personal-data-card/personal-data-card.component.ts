import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShadowRunCharacter } from '../../models/shadow-run.model';
import { ShadowRunCharactersService } from '../../services/shadow-run-characters.service';

@Component({
  selector: 'app-personal-data-card',
  templateUrl: './personal-data-card.component.html',
  styleUrl: './personal-data-card.component.css'
})
export class PersonalDataCardComponent {
    formBuilder = inject(FormBuilder);
    shadowRunCharactersService = inject(ShadowRunCharactersService);

    @Input() character!: ShadowRunCharacter;

    form!: FormGroup;
    metaTypeOptions: string[] = [];

    ngOnInit() {
        this.generateForm();
        this.setMetaTypeOptions();
    }

    generateForm() {
        this.form = this.formBuilder.group({
            name: [this.character.name, [Validators.required, Validators.minLength(3)]],
            ethnicity: [this.character.ethnicity],
            age: [this.character.age],
            gender: [this.character.gender],
            height: [this.character.height],
            weight: [this.character.weight],
            streetCred: [this.character.streetCred],
            notoriety: [this.character.notoriety],
            publicAwareness: [this.character.publicAwareness],
            misc: [this.character.misc],
            metaType: [this.character.metaType, [Validators.required]],
            karmaEarned: [this.character.karmaEarned, [Validators.required, Validators.min(0)]]
        });

        this.form.valueChanges.subscribe((formData: any) => {
            if(this.form.valid) {
                this.shadowRunCharactersService.updateCharacter(this.character.id, formData);
            }
        });
    }

    setMetaTypeOptions(): void {
        let options = ['human'];

        // code to get options goes here

        this.metaTypeOptions = options;
    }

    get isNameFieldValid(): boolean | undefined {
        return this.form.get("name")?.valid;
    }

    get hasNameFieldBeenTouched(): boolean | undefined {
        return this.form.get("name")?.touched;
    }
}
