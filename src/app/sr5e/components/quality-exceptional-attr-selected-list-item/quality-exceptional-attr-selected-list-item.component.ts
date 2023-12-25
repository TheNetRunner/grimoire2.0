import { Component, Input, Output, inject, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { QualityReference, Quality } from '../../models/quality.interface';
import { ShadowRun5ECharacter } from '../../models/character.model';
import { Attribute, MagicAttribute } from '../../models/attribute.interface';
import { QualityService } from '../../services/quality.service';

type ExceptionalAttributeChoices = Attribute | MagicAttribute

@Component({
  selector: 'app-quality-exceptional-attr-selected-list-item',
  templateUrl: './quality-exceptional-attr-selected-list-item.component.html',
  styleUrl: './quality-exceptional-attr-selected-list-item.component.css'
})
export class QualityExceptionalAttrSelectedListItemComponent implements OnInit {
    private formBuilder = inject(FormBuilder);
    private qualityService = inject(QualityService);

    @Input() qualityReference!: QualityReference;
    @Input() character!: ShadowRun5ECharacter;
    @Output() qualityReferenceAttributeChange = new EventEmitter<Attribute>();
    @Output() removeQualityEvent = new EventEmitter<string>();

    isCollapsed = true;
    quality!: Quality | undefined;
    attributeOptions: ExceptionalAttributeChoices[] = [];
    attributeForm!: FormGroup;
    
    ngOnInit(): void {
        this.setQuality();
        this.setAttributeOptions();
        this.generateAttributeForm();
    }

    setQuality(): void {
        this.quality = this.qualityService.getQualityByName(this.qualityReference.name);
    }

    generateAttributeForm(): void {
        const exceptionalAttributeName = this.character.getExceptionalAttribute() || Attribute.Body;

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
        return this.character.getQualityReferenceKarmaCost(this.qualityReference.name);
    }

    setAttributeOptions(): void {
        let options = [...Object.values(Attribute), MagicAttribute.Magic, MagicAttribute.Resonance];
        this.attributeOptions = options;
    }

    get attributeSelectionValue(): Attribute {
        return this.attributeForm.get("attribute")?.value;
    }
}
