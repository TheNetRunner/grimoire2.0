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
    @Output() qualityReferenceAttributeChange = new EventEmitter<QualityReference>();
    @Output() removeQualityEvent = new EventEmitter<QualityReference>();

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
        this.attributeForm = this.formBuilder.group({
            attribute: [this.qualityReference.attribute, [Validators.required]]
        });

        this.attributeForm.valueChanges.subscribe((formData: any) => {
            this.qualityReference.attribute = formData.attribute;
            this.emitQualityReferenceChange();
        });
    }

    emitQualityReferenceChange(): void {
        this.qualityReferenceAttributeChange.emit(this.qualityReference);
    }

    emitRemoveQualityEvent(): void {
        this.removeQualityEvent.emit(this.qualityReference);
    }

    getQualityKarmaCost(): number {
        return this.qualityReference.ratingValue * this.qualityReference.karmaCost;
    }

    setAttributeOptions(): void {
        let options = [...Object.values(Attribute), MagicAttribute.Magic, MagicAttribute.Resonance];
        this.attributeOptions = options;
    }

    get attributeSelectionValue(): Attribute {
        return this.attributeForm.get("attribute")?.value;
    }
}
