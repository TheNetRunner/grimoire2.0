import { Component, Input, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../models/character.inteface';
import { CharacterService } from '../../services/character.service';
import { ATTRIBUTE_NAMES } from '../../common/constants';

const attributeFormValidators = [Validators.required, Validators.min(0), Validators.max(99), Validators.pattern('^[0-9]*$')];

@Component({
  selector: 'app-attribute-step',
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.css'
})
export class AttributeStepComponent {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);
    private characterService = inject(CharacterService);

	@Input() character!: ShadowRun5ECharacter;
    attributeNames: string[] = ATTRIBUTE_NAMES;
	form!: FormGroup;

    	ngOnInit(): void {
		this.generateAttributesForm();
	}

	generateAttributesForm(): void {
		this.form = this.formBuilder.group({
            attributes: this.formBuilder.group({
                body: this.formBuilder.group({
                    buildPoints: [this.character.attributes.body.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.body.increases, attributeFormValidators],
                }),
                agility: this.formBuilder.group({
                    buildPoints: [this.character.attributes.agility.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.agility.increases, attributeFormValidators],
                }),
                reaction: this.formBuilder.group({
                    buildPoints: [this.character.attributes.reaction.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.reaction.increases, attributeFormValidators],
                }),
                strength: this.formBuilder.group({
                    buildPoints: [this.character.attributes.strength.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.strength.increases, attributeFormValidators],
                }),
                willPower: this.formBuilder.group({
                    buildPoints: [this.character.attributes.willPower.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.willPower.increases, attributeFormValidators],
                }),
                logic: this.formBuilder.group({
                    buildPoints: [this.character.attributes.logic.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.logic.increases, attributeFormValidators],
                }),
                intuition: this.formBuilder.group({
                    buildPoints: [this.character.attributes.intuition.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.intuition.increases, attributeFormValidators],
                }),
                charisma: this.formBuilder.group({
                    buildPoints: [this.character.attributes.charisma.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.charisma.increases, attributeFormValidators],
                }),
            }),
		});

		this.form.valueChanges.subscribe((formData: any) => {
			if (this.form.valid) {
                this.dataStoreService.updateCharacter(this.character.id, formData);
			}
		});
	}

    getAttributeFormGroupByName(attributeName: string): FormGroup | undefined {
        const attributesFormGroup = this.form.get('attributes') as FormGroup;
        const attributeFormGroup = attributesFormGroup?.get(attributeName) as FormGroup;
        return attributeFormGroup;
    }

    isFormControlValid(attributeName: string, controlName: string): boolean | undefined {
        const attributeFormGroup = this.getAttributeFormGroupByName(attributeName);
        return attributeFormGroup?.get(controlName)?.valid;
    }

    hasFormControlBeenTouched(attributeName: string, controlName: string): boolean | undefined {
        const attributeFormGroup = this.getAttributeFormGroupByName(attributeName);
        return attributeFormGroup?.get(controlName)?.touched;
    }

    getAttributeTotalValue(attributeName: string): number { 
        return this.characterService.calculateAttributeTotalValue(this.character, attributeName);
    }

    getAttributeMinValue(attributeName: string): number {
        return this.characterService.calculateAttributeMinAndMax(this.character, attributeName)[0];
    }

    getAttributeMaxValue(attributeName: string): number {
        return this.characterService.calculateAttributeMinAndMax(this.character, attributeName)[1];
    }

    isAttributeTotalValueGreaterThanMax(attributeName: string): boolean {
        return this.getAttributeTotalValue(attributeName) > this.getAttributeMaxValue(attributeName);
    }

    get totalBuildPointsSpent(): number {
        return this.characterService.getTotalBuildPointsSpent(this.character);
    }

    get maxBuildPoints(): number {
        return this.characterService.getMaxBuildPoints(this.character);
    }

    get totalIncreasesSpent(): number {
        return this.characterService.calculateTotalIncreasesSpent(this.character);
    }
}
