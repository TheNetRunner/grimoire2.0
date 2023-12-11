import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { CharacterService } from '../../services/character.service';
import { Attribute, AttributeName, SpecialAttributeName } from '../../models/attribute.model';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { PHYSICAL_LIMIT, SOCIAL_LIMIT, MENTAL_LIMIT } from '../../common/constants';

const attributeFormValidators = [Validators.required, Validators.min(0), Validators.max(99), Validators.pattern('^[0-9]*$')];

@Component({
  selector: 'app-attribute-step',
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.css'
})
export class AttributeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);
    private characterService = inject(CharacterService);

	@Input() character!: ShadowRun5ECharacter;

    attributeNames: AttributeName[] = Object.values(AttributeName);
    specialAttributeNames: SpecialAttributeName[] = Object.values(SpecialAttributeName);
	attributeForm!: FormGroup;
    specialAttributeForm!: FormGroup;
    physicalLimitText = PHYSICAL_LIMIT;
    mentalLimitText = MENTAL_LIMIT;
    socialLimitText = SOCIAL_LIMIT;

    ngOnInit(): void {
		this.generateForms();
	}

    generateForms(): void {
        this.generateAttributesForm();
        this.generateSpecialAttributeForm();
    }

	generateAttributesForm(): void {
		this.attributeForm = this.formBuilder.group({
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

		this.attributeForm.valueChanges.subscribe((formData: any) => {
			if (this.attributeForm.valid) {
                this.dataStoreService.updateCharacter(this.character.id, formData);
			}
		});
	}

    generateSpecialAttributeForm(): void {
        this.specialAttributeForm = this.formBuilder.group({
            specialAttributes: this.formBuilder.group({
                edge: this.formBuilder.group({
                    buildPoints: [this.character.specialAttributes.edge.buildPoints, attributeFormValidators],
                    increases: [this.character.specialAttributes.edge.increases, attributeFormValidators],
                }),
            }),
        });

        this.specialAttributeForm.valueChanges.subscribe((formData: any) => {
            if (this.attributeForm.valid) {
                this.dataStoreService.updateCharacter(this.character.id, formData);
            }
        });
    }

    getAttributeFormGroupByName(attributeName: AttributeName): FormGroup | undefined {
        const attributesFormGroup = this.attributeForm.get('attributes') as FormGroup;
        const attributeFormGroup = attributesFormGroup?.get(attributeName) as FormGroup;
        return attributeFormGroup;
    }

    isFormControlValid(attributeName: AttributeName, controlName: string): boolean | undefined {
        const attributeFormGroup = this.getAttributeFormGroupByName(attributeName);
        return attributeFormGroup?.get(controlName)?.valid;
    }

    hasFormControlBeenTouched(attributeName: AttributeName, controlName: string): boolean | undefined {
        const attributeFormGroup = this.getAttributeFormGroupByName(attributeName);
        return attributeFormGroup?.get(controlName)?.touched;
    }

    getAttributeTotalValue(attributeName: AttributeName | SpecialAttributeName): number { 
        return this.characterService.calAttributeTotalValue(this.character, attributeName);
    }

    getAttributeMinValue(attributeName: AttributeName | SpecialAttributeName): number {
        return this.characterService.calAttributeMinAndMax(this.character, attributeName)[0];
    }

    getAttributeMaxValue(attributeName: AttributeName | SpecialAttributeName): number {
        return this.characterService.calAttributeMinAndMax(this.character, attributeName)[1];
    }

    isAttributeTotalValueGreaterThanMax(attributeName: AttributeName | SpecialAttributeName): boolean {
        return this.getAttributeTotalValue(attributeName) > this.getAttributeMaxValue(attributeName);
    }

    get totalBuildPointsSpent(): number {
        return this.characterService.getTotalBuildPointsSpent(this.character);
    }

    get maxBuildPoints(): number {
        return this.characterService.getMaxBuildPoints(this.character);
    }

    get totalSpecialBuildPointsSpent(): number {
        return this.characterService.getTotalSpecialBuildPointsSpent(this.character);
    }

    get maxSpecialBuildPoints(): number {
        return this.characterService.getMaxSpecialBuildPoints(this.character);
    }

    get totalAttributeIncreasesCost(): number {
        return this.characterService.calTotalAttributeIncreasesCost(this.character);
    }

    get totalSpecialAttributeIncreasesCost(): number {
        return this.characterService.calTotalSpecialAttributeIncreasesCost(this.character);
    }

    get initiativeValue(): number {
        return this.characterService.calInitativeAttribute(this.character);
    }

    get physicalLimit(): number {
        return this.characterService.calPhysicalLimit(this.character);
    }

    get mentalLimit(): number {
        return this.characterService.calMentalLimit(this.character);
    }

    get socialLimit(): number {
        return this.characterService.calSocialLimit(this.character);
    }
}
