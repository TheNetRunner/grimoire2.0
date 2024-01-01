import { Component, Output, Input, EventEmitter, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Quality, QualityReference, QualityOption } from '../../../character/interfaces/quality.interface';
import { positiveQualities, negativeQualities } from '../../../character/data/qualities.data';
import { EXCEPTIONAL_ATTRIBUTE_NAMES, ExceptionalAttribute } from '../../../common/constants';

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
    attributeOptions: ExceptionalAttribute[] = [];

    optionsForm!: FormGroup;
    formOptions: QualityOption[] = [];

    ratingForm!: FormGroup;
    ratingOptions: number[] = [];

    ngOnInit(): void {
        this.setQuality();
        this.setForm();
    }

    setQuality(): void {
        const allQualities: Quality[] = [...positiveQualities, ...negativeQualities];
        this.quality = allQualities.find(q => q.name === this.qualityReference.name)!;
    }

    setForm(): void {
        if (this.qualityReference.name === "exceptional attribute") {
            this.setAttributeForm();
        }

        if (this.qualityReference.optionSelection) {
            this.setOptionsForm();
        }

        if (this.qualityReference.maxRating > 1) {
            this.setRatingForm();
        }
    }

    setAttributeForm(): void {
        this.attributeOptions = EXCEPTIONAL_ATTRIBUTE_NAMES;

        this.attributeForm = this.formBuilder.group({
            attributeName: [this.qualityReference.attribute]
        });

        this.attributeForm.valueChanges.subscribe((formData: any) => {
            this.qualityReference.attribute = formData.attributeName;
            this.updateQualityReferenceEvent.emit(
                { qualityReference: this.qualityReference, qualityType: this.quality.type }
            );
        });
    }

    setOptionsForm(): void {
        if(this.quality.options) {
            this.formOptions = this.quality.options;
        }
        
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

    setRatingForm(): void {
        if(this.quality.maxRating > 1) {
            for(let i = 1; i <= this.quality.maxRating; i++) {
                this.ratingOptions.push(i);
            }
        }

        this.ratingForm = this.formBuilder.group({
            rating: [this.qualityReference.ratingValue]
        });

        this.ratingForm.valueChanges.subscribe((formData: any) => {
            this.qualityReference.ratingValue = formData.rating;
            this.updateQualityReferenceEvent.emit(
                { qualityReference: this.qualityReference, qualityType: this.quality.type }
            );
        });

    }

    emitRemoveQualityReferenceEvent(): void {
        this.removeQualityReferenceEvent.emit(this.qualityReference);
    }

    get optionFormValue(): string {
        return this.optionsForm.get("option")?.value;
    }

    get optionDescription(): string {
        const option = this.formOptions.find(option => option.name === this.optionFormValue);
        return option?.description || "";
    }
}
