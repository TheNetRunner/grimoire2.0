import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShadowRun5ECharacter } from '../../models/new-character.model';
import { DataStoreService } from '../../services/data-store.service';
import { CharacterService } from '../../services/character.service';
import { MagicUserType } from '../../models/magic.model';

@Component({
  selector: 'app-magic-step',
  templateUrl: './magic-step.component.html',
  styleUrl: './magic-step.component.css'
})
export class MagicStepComponent {
    private formBuilder = inject(FormBuilder);
    private characterService = inject(CharacterService);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;
    magicUserTypeOptions: MagicUserType[] = [];
    form!: FormGroup;

    ngOnInit(): void {
        this.setMagicUserTypeOptions();
		this.generateForm();
	}

    private setMagicUserTypeOptions(): void {
        this.magicUserTypeOptions = this.characterService.getMagicUserTypeOptions(this.character);
    }

    private generateForm(): void {
        this.form = this.formBuilder.group({
            magicUserType: [this.character.magicUserType, [Validators.required]]
        });

        this.form.valueChanges.subscribe((formData: any) => {
            this.character.magicUserType = formData.magicUserType;
            this.dataStoreService.updateCharacter(this.character.id, formData);
        });
    }
}
