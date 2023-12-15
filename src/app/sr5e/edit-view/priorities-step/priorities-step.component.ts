import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CharacterService } from '../../services/character.service';
import { DataStoreService } from '../../services/data-store.service';
import { LevelOfPlayName, MagicResonanceText, Priority, PriorityTableRow } from '../../models/priority-table.model';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { priorityTable } from '../../data/priority-table.data';
import { areFormValuesUnique } from '../../../shared/form-validators/unique-values-validator/unique-values-validator.module';
import { MetaTypeName, MetaTypeStartingValues } from '../../models/meta-types.model';
import { MagicUserType } from '../../models/magic.model';

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
    magicUserTypeOptions: MagicUserType[] = [];

    priorityForm!: FormGroup;
    magicUserTypeForm!: FormGroup;

	ngOnInit(): void {
        this.setMagicUserTypeOptions();
		this.generateForms();
	}

    generateForms(): void {
        this.generatePriorityForm();
        this.generateMagicUserTypeForm();
    }

	private generatePriorityForm(): void {
		this.priorityForm = this.formBuilder.group({
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

		this.priorityForm.valueChanges.subscribe((formData: any) => {

            if(this.character.priorities.metaType !== formData.priorities.metaType) {
                this.handleMetaTypePriorityChange();
            }

            if(this.character.priorities.magicResonance !== formData.priorities.magicResonance) {
                this.handleMagicResonancePriorityChange();
            }

            this.dataStoreService.updateCharacter(this.character.id, formData);
		});
    }

    private generateMagicUserTypeForm(): void {
        this.magicUserTypeForm = this.formBuilder.group({
            magicUserType: [this.character.magicUserType]
        });

        this.magicUserTypeForm.valueChanges.subscribe((formData: any) => {
            //TODO: create characerService method to handle magic user type change.
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

    handleMagicResonancePriorityChange(): void {
        this.character.magicUserType = MagicUserType.None;
        this.character.magic = undefined;

        this.setMagicUserTypeOptions();
        this.resetMagicUserTypeForm();

        this.dataStoreService.updateCharacter(this.character.id, this.character);
    }

    resetMagicUserTypeForm(): void {
        this.magicUserTypeForm.get('magicUserType')?.setValue(MagicUserType.None);
    }

    setMagicUserTypeOptions(): void {
        this.magicUserTypeOptions = this.characterService.getMagicUserTypeOptions(this.character);
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
        return this.priorityForm.get('priorities') as FormGroup;
    }

    get isFormValid(): boolean {
        return this.priorityForm.valid;
    }

    get levelOfPlayKey(): string {
        return this.character.levelOfPlay;
    }
}
