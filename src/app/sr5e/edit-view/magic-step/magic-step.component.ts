import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ShadowRun5ECharacter } from '../../models/character.model';
import { DataStoreService } from '../../services/data-store.service';
import { CharacterService } from '../../services/character.service';
import { MagicUserType } from '../../models/magic.interface';

@Component({
  selector: 'app-magic-step',
  templateUrl: './magic-step.component.html',
  styleUrl: './magic-step.component.css'
})
export class MagicStepComponent {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;
    magicUserTypeOptions: MagicUserType[] = [];
    form!: FormGroup;

    ngOnInit(): void {
        this.setMagicUserTypeOptions();
		this.generateForm();
	}

    private setMagicUserTypeOptions(): void {
        this.magicUserTypeOptions = [];
    }

    private generateForm(): void {
        this.form = this.formBuilder.group({
            magicUserType: [this.character.magic.magicUserType, [Validators.required]]
        });

        this.form.valueChanges.subscribe((formData: any) => {
            this.character.magic.magicUserType = formData.magicUserType;
            this.dataStoreService.updateCharacter(this.character.id, formData);
        });
    }
}
