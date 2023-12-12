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

    magicUserTypeOptions: MagicUserType[] = [];

    magicUserTypeForm!: FormGroup;
    attributeForm: FormGroup | null = null;


    ngOnInit(): void {
        this.setMagicUserTypeOptions();
        this.generateForms();
    }

    private generateForms(): void {
        this.generateMagicUserTypeForm();
        this.generateAttributeForm();        
    }

    private generateMagicUserTypeForm(): void {
        this.magicUserTypeForm = this.formGroupBuilder.group({
            magicUserType: [this.character.magicUserType]
        });

        this.magicUserTypeForm.valueChanges.subscribe((formData: any) => {
            this.handleMagicUserTypeChange(formData);
        });
    }

    private handleMagicUserTypeChange(formData: any): void {
        this.generateAttributeForm();
        this.dataStoreService.updateCharacter(this.character.id, formData);
    }

    private generateAttributeForm(): void {
        if(this.character.magicUserType && this.character.magicUserType !== MagicUserType.Technomancer) {
            this.generateMagicAttributeForm();
        }

        if(this.character.magicUserType && this.character.magicUserType === MagicUserType.Technomancer) {
            this.generateResonanceForm();
        }
    }

    private generateMagicAttributeForm(): void {
        this.attributeForm = this.formGroupBuilder.group({
            magicBuildPoints: [this.character.magic.attribute.buildPoints, attributeFormValidators],
            magicIncreases: [this.character.magic.attribute.increases, attributeFormValidators]
        });

        this.attributeForm.valueChanges.subscribe((formData: any) => {
            const updates = {
                magic: {
                    attribute: {
                        buildPoints: formData.magicBuildPoints,
                        increases: formData.magicIncreases
                    }
                }
            };
            this.dataStoreService.updateCharacter(this.character.id, updates);
        });

    }

    private generateResonanceForm(): void {
        this.attributeForm = this.formGroupBuilder.group({
            resonanceBuildPoints: [this.character.resonance.attribute.buildPoints, attributeFormValidators],
            resonanceIncreases: [this.character.resonance.attribute.increases, attributeFormValidators]
        });

        this.attributeForm.valueChanges.subscribe((formData: any) => {
            const updates = {
                resonance: {
                    attribute: {
                        buildPoints: formData.resonanceBuildPoints,
                        increases: formData.resonanceIncreases
                    }
                }
            };
            this.dataStoreService.updateCharacter(this.character.id, updates);
        });
    }



    setMagicUserTypeOptions(): void {
        this.magicUserTypeOptions = this.characterService.getMagicUserTypeOptions(this.character);
    }


    get magicalAttributeMinimum(): number {
        return this.characterService.getMagicalAttributeMinimum(this.character);
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
