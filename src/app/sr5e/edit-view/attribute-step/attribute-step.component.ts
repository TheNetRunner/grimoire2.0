import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Attribute } from '../../models/attribute.interface';
import { DataStoreService } from '../../services/data-store.service';
import { PHYSICAL_LIMIT_TEXT, SOCIAL_LIMIT_TEXT, MENTAL_LIMIT_TEXT } from '../../common/constants';
import { PriorityTableService } from '../../services/priority-table.service';
import { ShadowRun5ECharacter } from '../../models/character.model';

const attributeFormValidators = [
    Validators.required, 
    Validators.min(0), 
    Validators.max(99), 
    Validators.pattern('^[0-9]*$')
];

@Component({
  selector: 'app-attribute-step',
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.css'
})
export class AttributeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);
    private priorityTableService = inject(PriorityTableService);

	@Input() character!: ShadowRun5ECharacter;

    attributes: Attribute[] = Object.values(Attribute);
	attributeForm!: FormGroup;
    specialAttributeForm!: FormGroup;

    physicalLimitText = PHYSICAL_LIMIT_TEXT;
    mentalLimitText = MENTAL_LIMIT_TEXT;
    socialLimitText = SOCIAL_LIMIT_TEXT;

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
                    exceptional: [this.character.attributes.body.exceptional, [Validators.required]],
                }),
                agility: this.formBuilder.group({
                    buildPoints: [this.character.attributes.agility.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.agility.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.agility.exceptional, [Validators.required]],
                }),
                reaction: this.formBuilder.group({
                    buildPoints: [this.character.attributes.reaction.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.reaction.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.reaction.exceptional, [Validators.required]],
                }),
                strength: this.formBuilder.group({
                    buildPoints: [this.character.attributes.strength.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.strength.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.strength.exceptional, [Validators.required]],
                }),
                willPower: this.formBuilder.group({
                    buildPoints: [this.character.attributes.willPower.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.willPower.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.willPower.exceptional, [Validators.required]],
                }),
                logic: this.formBuilder.group({
                    buildPoints: [this.character.attributes.logic.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.logic.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.logic.exceptional, [Validators.required]],
                }),
                intuition: this.formBuilder.group({
                    buildPoints: [this.character.attributes.intuition.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.intuition.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.intuition.exceptional, [Validators.required]],
                }),
                charisma: this.formBuilder.group({
                    buildPoints: [this.character.attributes.charisma.buildPoints, attributeFormValidators],
                    increases: [this.character.attributes.charisma.increases, attributeFormValidators],
                    exceptional: [this.character.attributes.charisma.exceptional, [Validators.required]],
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
        this.specialAttributeForm = this.formBuilder.group({});
    }

    getAttributeFormGroupByName(attribute: Attribute): FormGroup | undefined {
        const attributesFormGroup = this.attributeForm.get('attributes') as FormGroup;
        const attributeFormGroup = attributesFormGroup?.get(attribute) as FormGroup;
        return attributeFormGroup;
    }

    isFormControlValid(attribute: Attribute, controlName: string): boolean | undefined {
        const attributeFormGroup = this.getAttributeFormGroupByName(attribute);
        return attributeFormGroup?.get(controlName)?.valid;
    }

    hasFormControlBeenTouched(attribute: Attribute, controlName: string): boolean | undefined {
        const attributeFormGroup = this.getAttributeFormGroupByName(attribute);
        return attributeFormGroup?.get(controlName)?.touched;
    }

    // Attribute

    getAttributeTotalValue(attribute: Attribute): number { 
        return this.character.getAttributeTotalValue(attribute);
    }

    getAttributeMinValue(attribute: Attribute): number | undefined {
        return this.character.getAttributeByName(attribute).racialBaseValue;
    }

    getAttributeMaxValue(attribute: Attribute): number | undefined {
        return this.character.getAttributeByName(attribute).racialMaxValue;
    }

    isAttributeTotalValueGreaterThanMax(attribute: Attribute): boolean {
        return this.character.isAttributeAboveMaximum(attribute);
    }

    isAttributeExceptional(attribute: Attribute): boolean {
        return this.character.getAttributeByName(attribute).exceptional;
    }

    get getAllAttributeBuildPoints(): number {
        return this.character.getAttributeBuildPointsTotal();
    }

    get getAttributeIncreaseCostTotal(): number {
        return this.character.getAttributeIncreaseCostTotal();
    }

    get initiative(): number {
        return this.character.initiative;
    }

    get priorityAttributePoints(): number {
        const priority = this.character.priorities.attributes;
        return this.priorityTableService.getAttributePoints(priority);
    }

    // Special Attribute

    // getSpecialAttributeTotalValue(specialAttributeName: SpecialAttributeName): number { 
    //     return this.characterService.specialAttributeTotalValue(this.character, specialAttributeName);
    // }

    // getSpecialAttributeMinValue(specialAttributeName: SpecialAttributeName): number {
    //     return this.characterService.getSpecialAttributeMinimumValue(this.character, specialAttributeName);
    // }

    // getSpecialAttributeMaxValue(specialAttributeName: SpecialAttributeName): number {
    //     return this.characterService.getSpecialAttributeMaximumValue(this.character, specialAttributeName);
    // }

    // isSpecialAttributeTotalValueGreaterThanMax(specialAttributeName: SpecialAttributeName): boolean {
    //     return this.characterService.isSpecialAttributeValueValid(this.character, specialAttributeName);
    // }

    // get allSpecialAttributeBuildPoints(): number {
    //     return this.characterService.getAllSpecialAttributeBuildPoints(this.character);
    // }

    // get prioritySpecialAttributePoints(): number {
    //     return this.characterService.getPriotityMetaTypeSpecialAttributePoints(this.character);
    // }

    // get doesCharacterHaveLuckyQuality(): boolean {
    //     return this.characterService.doesCharacterHaveQuality(this.character, 'lucky');
    // }

    // Limits

    get physicalLimit(): number {
        return this.character.physicalLimit;
    }

    get mentalLimit(): number {
        return this.character.mentalLimit;
    }

    get socialLimit(): number {
        return this.character.socialLimit;
    }
}
