import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataStoreService } from '../../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../../character/character';
import { AttributeName, MagicAttributeName } from '../../../character/interfaces/attribute.interface';

const normalAttributes = [
    AttributeName.Body, AttributeName.Agility, AttributeName.Reaction, AttributeName.Strength, 
    AttributeName.Willpower, AttributeName.Logic, AttributeName.Intuition, AttributeName.Charisma
]

const specialAttributes = [AttributeName.Edge, MagicAttributeName.Magic, MagicAttributeName.Resonance]

@Component({
  selector: 'app-attribute-step',
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.css'
})
export class AttributeStepComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    normalAttributes = normalAttributes;
    specialAttributes = specialAttributes;

    normalAttributeForm!: FormGroup;
    specialAttributeForm!: FormGroup;

    ngOnInit(): void {
        this.setForms();
    }

    setForms(): void {
        this.setNormalAttributeForm();
        this.setSpecialAttributeForm();
    }

    setNormalAttributeForm(): void {
        this.normalAttributeForm = this.formBuilder.group({
            body: this.formBuilder.group({
                buildPoints: [this.character.attributeManager.getAttributeBuildPoints(AttributeName.Body)],
                increases: [this.character.attributeManager.getAttributeIncreases(AttributeName.Body)]
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

        this.normalAttributeForm.valueChanges.subscribe((formData: any) => {
            this.character.attributeManager.attributes = formData;
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
        });
    }

    setSpecialAttributeForm(): void {

    }
}
