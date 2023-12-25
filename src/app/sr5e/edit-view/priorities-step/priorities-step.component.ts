import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { Priority, PriorityTable, PriorityTableRow } from '../../models/priority.interface';
import { PriorityTableService } from '../../services/priority-table.service';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { priorityTable } from '../../data/priority-table.data';
import { areFormValuesUnique } from '../../../shared/form-validators/unique-values-validator/unique-values-validator.module';

@Component({
  selector: 'app-priorities-step',
  templateUrl: './priorities-step.component.html',
  styleUrl: './priorities-step.component.css'
})
export class PrioritiesStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private priorityTableService = inject(PriorityTableService);
    private dataStoreService = inject(DataStoreService);

	@Input() character!: ShadowRun5ECharacter;
	availablePriorityOptions = Object.values(Priority);
    priorityTable: PriorityTable = priorityTable;
    priorityForm!: FormGroup;
    

	ngOnInit(): void {
		this.generatePriorityForm();
	}

	private generatePriorityForm(): void {
		this.priorityForm = this.formBuilder.group(
            {
                metaType: [this.character.priorities.metaType, [Validators.required]],
                attributes: [this.character.priorities.attributes, [Validators.required]],
                magic: [this.character.priorities.magic, [Validators.required]],
                skills: [this.character.priorities.skills, [Validators.required]],
                resources: [this.character.priorities.resources, [Validators.required]],
            },
            { validators: areFormValuesUnique() }
        );

		this.priorityForm.valueChanges.subscribe((formData: any) => {
            if(this.character.priorities.metaType !== formData.metaType) {
                this.character.handleMetaTypePriorityChange(formData.metaType);
                this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
            }

            if(this.character.priorities.magic !== formData.magic) {
               this.character.handleMagicPriorityChange(formData.magic);
               this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
            }

            this.character.priorities = formData;
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
		});
    }

    get levelOfPlayResources(): number {
        return this.priorityTableService.getResourceAmountByLevelOfPlay(
            this.character.priorities.resources, this.character.settings.levelOfPlay);
    }

    getPriorityMetaTypesFromTable(priority: Priority): PriorityTableRow['metaTypes'] {
        return this.priorityTableService.getMetaTypes(priority);
    }

    getPriorityAttributePointsFromTable(priority: Priority): number {
        return this.priorityTableService.getAttributePoints(priority);
    }

    getPriorityMagicTextFromTable(priority: Priority): PriorityTableRow['magicText'] {
        return this.priorityTableService.getMagicText(priority);
    }

    getPrioritySkillsPointsFromTable(priority: Priority): PriorityTableRow['skills'] {
        return this.priorityTableService.getSkills(priority);
    }

    getResourceAmountByLevelOfPlayFromTable(priority: Priority): number {
        return this.priorityTableService.getResourceAmountByLevelOfPlay(priority, this.character.settings.levelOfPlay);
    }

    get prioritiesFormGroup(): FormGroup {
        return this.priorityForm.get('priorities') as FormGroup;
    }

    get isFormValid(): boolean {
        return this.priorityForm.valid;
    }
}
