import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CharacterService } from '../../services/character.service';
import { DataStoreService } from '../../services/data-store.service';
import { LevelOfPlayName, MagicResonanceText, Priority, PriorityTableRow } from '../../models/priority-table.model';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { priorityTable } from '../../data/priority-table.data';
import { areFormValuesUnique } from '../../../shared/form-validators/unique-values-validator/unique-values-validator.module';
import { MetaTypeName, MetaTypeStartingValues } from '../../models/meta-types.model';

@Component({
  selector: 'app-priorities-step',
  templateUrl: './priorities-step.component.html',
  styleUrl: './priorities-step.component.css'
})
export class PrioritiesStepComponent {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);
    private characterService = inject(CharacterService);

	@Input() character!: ShadowRun5ECharacter;
	availablePriorityOptions = Object.values(Priority);
    priorityTable: PriorityTableRow[] = priorityTable;
    form!: FormGroup;

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
            console.log(this.character.priorities.metaType !== formData.priorities.metaType);
            if(this.character.priorities.metaType !== formData.priorities.metaType) {
                this.handleMetaTypePriorityChange();
            }

            this.dataStoreService.updateCharacter(this.character.id, formData);
		});
    }

    handleMetaTypePriorityChange(): void {
        const update = {
            metaType: MetaTypeName.human,
            image: "human_one"
        }

        this.dataStoreService.updateCharacter(this.character.id, update);
    }

    getLevelOfPlayResources(priority: Priority, levelOfPlay: LevelOfPlayName): number {
        let amount = 0;
        const priorityResourceAmounts = this.characterService.getPriorityResourceAmounts(priority);

        if(priorityResourceAmounts) {
            amount = priorityResourceAmounts[levelOfPlay];
        }

        return amount;
    }

    getPriorityMetaTypes(priority: Priority): MetaTypeStartingValues[] {
        return this.characterService.getPriorityMetaTypes(priority);
    }

    getPriorityAttributePoints(priority: Priority): number {
        return this.characterService.getPriorityAttributePoints(priority);
    }

    getPrioritySkillsPoints(priority: Priority): { skillPoints: number, skillGroupPoints: number } {
        return this.characterService.getPrioritySkillsPoints(priority);
    }

    getPriorityMagicResonanceText(priority: Priority): MagicResonanceText[] {
        return this.characterService.getPriorityMagicResonanceText(priority);

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
