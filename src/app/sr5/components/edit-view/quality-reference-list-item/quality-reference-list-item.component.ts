import { Component, Output, Input, EventEmitter, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Quality, QualityReference } from '../../../character/interfaces/quality.interface';
import { positiveQualities, negativeQualities } from '../../../character/data/qualities.data';
import { EXCEPTIONAL_ATTRIBUTE_NAMES } from '../../../common/constants';

interface QualityReferenceUpdate {
    qualityReference: QualityReference,
    qualityType: string
}

@Component({
  selector: 'app-quality-reference-list-item',
  templateUrl: './quality-reference-list-item.component.html',
  styleUrl: './quality-reference-list-item.component.css'
})
export class QualityReferenceListItemComponent implements OnInit {
    private formBuilder = inject(FormBuilder);

    @Input() qualityReference!: QualityReference;
    @Output() removeQualityReferenceEvent = new EventEmitter<QualityReference>();
    @Output() updateQualityReferenceEvent = new EventEmitter<QualityReferenceUpdate>();

    quality!: Quality;
    collapsed: boolean = true;
    attributeForm!: FormGroup;
    attributeOptions = EXCEPTIONAL_ATTRIBUTE_NAMES;
    optionsForm!: FormGroup;
    formOptions: any[] = [];

    ngOnInit(): void {
        this.setQuality();
        this.setForms();
        this.setFormOptions();
    }

    setQuality(): void {
        const allQualities: Quality[] = [...positiveQualities, ...negativeQualities];
        this.quality = allQualities.find(q => q.name === this.qualityReference.name)!;
    }

    setForms(): void {
        this.attributeForm = this.formBuilder.group({
            attributeName: [this.qualityReference.attribute]
        });

        this.attributeForm.valueChanges.subscribe((formData: any) => {
            this.qualityReference.attribute = formData.attributeName;
            this.updateQualityReferenceEvent.emit(
                { qualityReference: this.qualityReference, qualityType: this.quality.type }
            );
        });

        this.optionsForm = this.formBuilder.group({
            option: [this.qualityReference.optionSelection]
        });

        this.optionsForm.valueChanges.subscribe((formData: any) => {
            this.qualityReference.optionSelection = formData.option;
            this.updateQualityReferenceEvent.emit(
                { qualityReference: this.qualityReference, qualityType: this.quality.type }
            );
        });
    }

    setFormOptions(): void {
        if(this.quality.options) {
            this.formOptions = this.quality.options;
        }
    }

    emitRemoveQualityReferenceEvent(): void {
        this.removeQualityReferenceEvent.emit(this.qualityReference);
    }
}
