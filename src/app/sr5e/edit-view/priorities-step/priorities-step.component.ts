import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../models/character.inteface';
import { PRIORITIES } from '../../common/constants';
import { areFormValuesUnique } from '../../../shared/form-validators/unique-values-validator/unique-values-validator.module';
import { PriorityTable, PriorityRow } from '../../models/priorityTables.interface';
import { priorityTable } from '../../data/priorityTable';

@Component({
  selector: 'app-priorities-step',
  templateUrl: './priorities-step.component.html',
  styleUrl: './priorities-step.component.css'
})
export class PrioritiesStepComponent {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);

	@Input() character!: ShadowRun5ECharacter;
	availablePriorityOptions: string[] = PRIORITIES;
	form!: FormGroup;
    priorityTable: PriorityTable = priorityTable;

	ngOnInit(): void {
		this.generatePriorityForm();
	}

	generatePriorityForm(): void {
		this.form = this.formBuilder.group({
            priorities: this.formBuilder.group(
                {
                    metaType: [this.character.priorities.metaType, [Validators.required]],
                    attributes: [this.character.priorities.attributes, [Validators.required]],
                    magicResonance: [this.character.priorities.magicResonance, [Validators.required]],
                    skills: [this.character.priorities.skills, [Validators.required]],
                    resources: [this.character.priorities.resources, [Validators.required]],
                },
                { validators: areFormValuesUnique() }
            )
        });

		this.form.valueChanges.subscribe((formData: any) => {

            if(this.character.priorities.metaType !== formData.priorities.metaType) {
                this.character.metaType = "human";
            }

            this.dataStoreService.updateCharacter(this.character.id, formData);
		});
    }

    getPriorityRow(priority: string): PriorityRow {
        const key = priority as keyof typeof this.priorityTable;
        return this.priorityTable[key];
    }

    getLevelOfPlayResources(priority: string, levelOfPlay: string): number {
        const row = this.getPriorityRow(priority);
        const key = levelOfPlay as keyof typeof row.resources;

        return row.resources[key];
    }

    get prioritiesFormGroup(): FormGroup {
        return this.form.get('priorities') as FormGroup;
    }

    get isFormValid(): boolean {
        return this.form.valid;
    }

    get levelOfPlayKey(): string {
        return this.character.levelOfPlay;
    }
}
