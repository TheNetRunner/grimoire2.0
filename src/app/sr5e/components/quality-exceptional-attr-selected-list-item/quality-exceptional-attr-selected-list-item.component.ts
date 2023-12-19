import { Component, Input, Output, inject, EventEmitter, OnInit, Attribute } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { QualityReference, Quality } from '../../models/quality.model';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { AttributeName, SpecialAttributeName } from '../../models/attribute.model';
import { CharacterService } from '../../services/character.service';

type ExceptionalAttributeChoices = AttributeName | SpecialAttributeName;

@Component({
  selector: 'app-quality-exceptional-attr-selected-list-item',
  templateUrl: './quality-exceptional-attr-selected-list-item.component.html',
  styleUrl: './quality-exceptional-attr-selected-list-item.component.css'
})
export class QualityExceptionalAttrSelectedListItemComponent implements OnInit {
    private characterService = inject(CharacterService);
    private formBuilder = inject(FormBuilder);

    @Input() qualityReference!: QualityReference;
    @Input() character!: ShadowRun5ECharacter;
    @Output() qualityReferenceAttributeChange = new EventEmitter<AttributeName>();
    @Output() removeQualityEvent = new EventEmitter<string>();

    isCollapsed = true;
    quality!: Quality | undefined;
    attributeOptions: ExceptionalAttributeChoices[] = [];
    attributeForm!: FormGroup;
    
    ngOnInit(): void {
        this.quality = this.characterService.getQualityByName(this.qualityReference.name);
        this.setAttributeOptions();
        this.generateAttributeForm();
    }

    generateAttributeForm(): void {
        const exceptionalAttributeName = this.characterService.getExceptionalAttributeName(this.character) || AttributeName.Body;

        this.attributeForm = this.formBuilder.group({
            attribute: [exceptionalAttributeName, [Validators.required]]
        });

        this.attributeForm.valueChanges.subscribe((formData: any) => {
            this.qualityReferenceAttributeChange.emit(formData.attribute);
        });
    }

    emitQualityReferenceAttributeChange(): void {
        const attributeName = this.attributeForm.get("attribute")?.value;
        this.qualityReferenceAttributeChange.emit(attributeName);
    }


    emitRemoveQualityEvent(): void {
        this.removeQualityEvent.emit(this.qualityReference.name);
    }

    getQualityKarmaCost(): number {
        const currentRating = this.qualityReference.ratingValue || 1;
        return this.characterService.getQualityKarmaCost(currentRating, this.qualityReference.name);
    }

    setAttributeOptions(): void {
        let options = [...Object.values(AttributeName), SpecialAttributeName.Magic, SpecialAttributeName.Resonance];
        this.attributeOptions = options;
    }

    get attributeSelectionValue(): AttributeName {
        return this.attributeForm.get("attribute")?.value;
    }
}
