import { Component, Input, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { CharacterService } from '../../services/character.service';
import { Attribute, AttributeName, SpecialAttributeName } from '../../models/attribute.model';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { PHYSICAL_LIMIT_TEXT, SOCIAL_LIMIT_TEXT, MENTAL_LIMIT_TEXT } from '../../common/constants';

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
    specialAttributeNames: SpecialAttributeName[] = [];
	attributeForm!: FormGroup;
    specialAttributeForm!: FormGroup;

    physicalLimitText = PHYSICAL_LIMIT_TEXT;
    mentalLimitText = MENTAL_LIMIT_TEXT;
    socialLimitText = SOCIAL_LIMIT_TEXT;

    ngOnInit(): void {
        this.setSpecialAttributeNames();
		this.generateForms();
	}

    setSpecialAttributeNames(): void {
        let specialAttributeNames: SpecialAttributeName[] = [SpecialAttributeName.Edge];
        const isCharacterMagicUser = this.characterService.isCharacterMagicUser(this.character);
        const isCharacterTechnomancer = this.characterService.isCharacterTechnomancer(this.character);

        if(isCharacterMagicUser) {
            specialAttributeNames.push(SpecialAttributeName.Magic);
        }

        if(isCharacterTechnomancer) {
            specialAttributeNames.push(SpecialAttributeName.Resonance);
        }

        this.specialAttributeNames = specialAttributeNames;
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
        });

        for(const specialAttributeName of this.specialAttributeNames) {
            this.specialAttributeForm.addControl(specialAttributeName, this.formBuilder.group({
                buildPoints: [this.character.specialAttributes[specialAttributeName].buildPoints, attributeFormValidators],
                increases: [this.character.specialAttributes[specialAttributeName].increases, attributeFormValidators],
            }));
        }

        this.specialAttributeForm.valueChanges.subscribe((formData: any) => {
            const update = {
                specialAttributes: formData
            }

            if (this.specialAttributeForm.valid) {
                this.dataStoreService.updateCharacter(this.character.id, update);
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

    // Attribute

    getAttributeTotalValue(attributeName: AttributeName): number { 
        return this.characterService.attributeTotalValue(this.character, attributeName);
    }

    getAttributeMinValue(attributeName: AttributeName): number {
        return this.characterService.getAttributeMinimumValue(this.character, attributeName);
    }

    getAttributeMaxValue(attributeName: AttributeName): number {
        return this.characterService.getAttributeMaximumValue(this.character, attributeName);
    }

    isAttributeTotalValueGreaterThanMax(attributeName: AttributeName): boolean {
        return this.characterService.isAttributeValueValid(this.character, attributeName);
    }

    isAttributeExceptional(AttributeName: AttributeName): boolean {
        return this.characterService.isAttributeExceptional(this.character, AttributeName);
    }

    get getAllAttributeBuildPoints(): number {
        return this.characterService.getAllAttributeBuildPoints(this.character);
    }

    get allAttributeTotalIncreasesCost(): number {
        return this.characterService.allAttributeTotalIncreasesCost(this.character);
    }

    get initiative(): number {
        return this.characterService.initiative(this.character);
    }

    get priorityAttributePoints(): number {
        return this.characterService.getCharacterPriorityAttributePoints(this.character);
    }

    // Special Attribute

    getSpecialAttributeTotalValue(specialAttributeName: SpecialAttributeName): number { 
        return this.characterService.specialAttributeTotalValue(this.character, specialAttributeName);
    }

    getSpecialAttributeMinValue(specialAttributeName: SpecialAttributeName): number {
        return this.characterService.getSpecialAttributeMinimumValue(this.character, specialAttributeName);
    }

    getSpecialAttributeMaxValue(specialAttributeName: SpecialAttributeName): number {
        return this.characterService.getSpecialAttributeMaximumValue(this.character, specialAttributeName);
    }

    isSpecialAttributeTotalValueGreaterThanMax(specialAttributeName: SpecialAttributeName): boolean {
        return this.characterService.isSpecialAttributeValueValid(this.character, specialAttributeName);
    }

    get allSpecialAttributeBuildPoints(): number {
        return this.characterService.getAllSpecialAttributeBuildPoints(this.character);
    }

    get prioritySpecialAttributePoints(): number {
        return this.characterService.getPriotityMetaTypeSpecialAttributePoints(this.character);
    }

    // Limits

    get physicalLimit(): number {
        return this.characterService.physicalLimit(this.character);
    }

    get mentalLimit(): number {
        return this.characterService.mentalLimit(this.character);
    }

    get socialLimit(): number {
        return this.characterService.socialLimit(this.character);
    }
}
