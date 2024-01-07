import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataStoreService } from '../../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../../character/character';
import { AttributeName, SpecialAttributeName } from '../../../character/interfaces/attribute.interface';

@Component({
  selector: 'app-attribute-step',
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.css'
})
export class AttributeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    normalAttributes = Object.values(AttributeName);
    specialAttributes = Object.values(SpecialAttributeName);

    normalAttributesForm!: FormGroup;
    specialAttributesForm!: FormGroup;

    ngOnInit(): void {
        this.setNormalAttributesForm();
        this.setSpecialAttributesForm();
    }

    setNormalAttributesForm(): void {
        this.normalAttributesForm = this.formBuilder.group({
            body: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.attributes.body.buildPoints],
                increases: [this.character.attributeManager.attributes.body.increases]
            }),
            agility: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Agility)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Agility)]
            }),
            reaction: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Reaction)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Reaction)]
            }),
            strength: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Strength)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Strength)]
            }),
            willpower: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Willpower)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Willpower)]
            }),
            logic: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Logic)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Logic)]
            }),
            intuition: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Intuition)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Intuition)]
            }),
            charisma: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Charisma)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Charisma)]
            })
        });

        this.normalAttributesForm.valueChanges.subscribe((formData: any) => {
            this.character.attributeManager.attributes = formData;
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
        });
    }

    setSpecialAttributesForm(): void {
        this.specialAttributesForm = this.formBuilder.group({
            edge: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.specialAttributes.edge.buildPoints],
                increases: [this.character.attributeManager.specialAttributes.edge.increases]
            }),
            magic: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.specialAttributes.magic.buildPoints],
                increases: [this.character.attributeManager.specialAttributes.magic.increases]
            }),
            resonance: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.specialAttributes.resonance.buildPoints],
                increases: [this.character.attributeManager.specialAttributes.resonance.increases]
            })
        });

        this.specialAttributesForm.valueChanges.subscribe((formData: any) => {
            this.character.attributeManager.specialAttributes.edge = formData.edge;
            this.character.attributeManager.specialAttributes.magic = formData.magic;
            this.character.attributeManager.specialAttributes.resonance = formData.resonance;
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
        });
    }
}
