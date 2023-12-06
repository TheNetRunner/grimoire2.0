import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShadowRunCharacter } from '../../models/shadow-run.model';
import { ShadowRunCharactersService } from '../../services/shadow-run-characters.service';

@Component({
  selector: 'app-attribute-card',
  templateUrl: './attribute-card.component.html',
  styleUrl: './attribute-card.component.css'
})
export class AttributeCardComponent {
    formBuilder = inject(FormBuilder);
    shadowRunCharactersService = inject(ShadowRunCharactersService);

    @Input() character!: ShadowRunCharacter;

    form!: FormGroup;

    ngOnInit() {
        this.generateForm();
    }

    generateForm() {
        this.form = this.formBuilder.group({
        });

        this.form.valueChanges.subscribe((formData: any) => {
            if(this.form.valid) {
                this.shadowRunCharactersService.updateCharacter(this.character.id, formData);
            }
        });
    }
}
