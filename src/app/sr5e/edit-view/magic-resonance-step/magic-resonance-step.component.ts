import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataStoreService } from '../../services/data-store.service';
import { CharacterService } from '../../services/character.service';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { MagicUserType } from '../../models/magic.model';

const attributeFormValidators = [Validators.required, Validators.min(0), Validators.max(99), Validators.pattern('^[0-9]*$')];

@Component({
  selector: 'app-magic-resonance-step',
  templateUrl: './magic-resonance-step.component.html',
  styleUrl: './magic-resonance-step.component.css'
})
export class MagicResonanceStepComponent implements OnInit {
    private formGroupBuilder = inject(FormBuilder);
    private characterService = inject(CharacterService);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    magicUserTypeOptions: MagicUserType[] = Object.values(MagicUserType);

    magicUserTypeForm!: FormGroup;
    attributeForm: FormGroup | null = null;


    ngOnInit(): void {
        this.generateForms();
    }

    generateForms(): void {
        this.generateMagicUserTypeForm();
        this.generateAttributeForm();        
    }

    generateMagicUserTypeForm(): void {
        this.magicUserTypeForm = this.formGroupBuilder.group({
            magicUserType: [this.character.magicUserType]
        });

        this.magicUserTypeForm.valueChanges.subscribe((formData: any) => {
            this.handleMagicUserTypeChange(formData);
        });
    }

    generateAttributeForm(): void {
        if(this.character.magicUserType && this.character.magicUserType !== MagicUserType.Technomancer) {
            this.generateMagicAttributeForm();
        }

        if(this.character.magicUserType && this.character.magicUserType === MagicUserType.Technomancer) {
            this.generateResonanceForm();
        }
    }

    generateMagicAttributeForm(): void {
        this.attributeForm = this.formGroupBuilder.group({
            magicBuildPoints: [this.character.magic.attribute.buildPoints, attributeFormValidators],
            magicIncreases: [this.character.magic.attribute.increases, attributeFormValidators]
        });

    }

    generateResonanceForm(): void {
        this.attributeForm = this.formGroupBuilder.group({
            magicBuildPoints: [this.character.resonance.attribute.buildPoints, attributeFormValidators],
            magicIncreases: [this.character.resonance.attribute.increases, attributeFormValidators]
        });
    }

    handleMagicUserTypeChange(formData: any): void {
        console.log(formData);
        this.generateAttributeForm();
        this.dataStoreService.updateCharacter(this.character.id, formData);
    }

    get totalMagicalBuildPointsSpent(): number {
        return this.characterService.getTotalMagicalBuildPointsSpent(this.character);
    }

    get magicalAttributeTotal(): number {
        return this.characterService.getMagicalAttributeTotal(this.character);
    }

    get totalSpecialBuildPointsSpent(): number {
        return this.characterService.getTotalSpecialBuildPointsSpent(this.character);
    }

    get maxSpecialBuildPoints(): number {
        return this.characterService.getMaxSpecialBuildPoints(this.character);
    }

    get attributeName(): string {
        let attributeName = "";

        if(this.character.magicUserType && this.character.magicUserType === MagicUserType.Technomancer) {
            attributeName = "Resonance";
        }

        if(this.character.magicUserType && this.character.magicUserType !== MagicUserType.Technomancer) {
            attributeName = "Magic";
        }

        return attributeName;
    }




}
