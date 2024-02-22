import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Shadowrun5ECharacter } from '../../../character/shadowrun-5e-character';
import { DataStoreService } from '../../../services/data-store.service';
import { LevelOfPlayName } from '../../../character/interfaces/settings.interface';
import { PrioritiesData, Priority } from '../../../character/priorities/priority.interface';
import { areFormValuesUnique } from "../../../../shared/form-validators/unique-values-validator/unique-values-validator.module"
import { priorityTable } from '../../../character/tables/priority-table.data';
import { PriorityTableRow } from '../../../character/priorities/priority.interface';

@Component({
  selector: 'app-priority-step',
  templateUrl: './priority-step.component.html',
  styleUrl: './priority-step.component.css'
})
export class PriorityStepComponent implements OnInit {
    private dataService = inject(DataStoreService);
    private formBuilder = inject(FormBuilder);

    @Input() character!: Shadowrun5ECharacter;

    priorityOptions: Priority[] = Object.values(Priority);
    form!: FormGroup;

    ngOnInit(): void {
        this.setForm();
    }

    setForm(): void {
        this.form = this.formBuilder.group({
            metaType: [this.character.priorities.metaType, [Validators.required]],
            attributes: [this.character.priorities.attributes, [Validators.required]],
            magic: [this.character.priorities.magic, [Validators.required]],
            skills: [this.character.priorities.skills, [Validators.required]],
            resources: [this.character.priorities.resources, [Validators.required]],
        }, { validators: areFormValuesUnique() });

        this.form.valueChanges.subscribe((formData: PrioritiesData) => {
            this.character.priorities = formData;
            this.dataService.updateCharacter(this.character.id, this.character.saveObject);
        });
    }

    getPriorityMetaTypesFromTable(priority: Priority): PriorityTableRow['metaTypes'] {
        return this.getPriorityTableRow(priority).metaTypes;
    }

    getPriorityAttributePointsFromTable(priority: Priority): number {
        return this.getPriorityTableRow(priority).attributePoints
    }

    getPriorityMagicTextFromTable(priority: Priority): PriorityTableRow['magicText'] {
        return this.getPriorityTableRow(priority).magicText;
    }

    getPrioritySkillsPointsFromTable(priority: Priority): PriorityTableRow['skills'] {
        return this.getPriorityTableRow(priority).skills;
    }

    getResourceAmountByLevelOfPlayFromTable(priority: Priority): number {
        const levelOfPlay: LevelOfPlayName = this.character.settings.levelOfPlay;
        return this.getResouces(priority)[levelOfPlay];
    }

    private getResouces(priority: Priority): PriorityTableRow['resources'] {
        return this.getPriorityTableRow(priority).resources;
    }

    private getPriorityTableRow(priority: Priority): PriorityTableRow {
        return priorityTable[priority];
    }

    get prioritiesFormGroup(): FormGroup {
        return this.form.get('priorities') as FormGroup;
    }

    get isFormValid(): boolean {
        return this.form.valid;
    }
}
