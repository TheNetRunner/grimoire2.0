import { Component, Input, Output, inject, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QualityReference, Quality, QualityOption } from '../../models/quality.interface';
import { QualityService } from '../../services/quality.service';

@Component({
  selector: 'app-quality-selected-list-item',
  templateUrl: './quality-selected-list-item.component.html',
  styleUrl: './quality-selected-list-item.component.css'
})
export class QualitySelectedListItemComponent implements OnInit {
    private qualityService = inject(QualityService);
    private formBuilder = inject(FormBuilder);

    @Input() qualityReference!: QualityReference;
    @Output() qualityReferenceRatingChange = new EventEmitter<QualityReference>();
    @Output() qualityReferenceOptionChange = new EventEmitter<QualityReference>();
    @Output() removeQualityEvent = new EventEmitter<QualityReference>();

    isCollapsed = true;
    quality!: Quality | undefined;
    ratingForm!: FormGroup;
    options: QualityOption[] = [];
    optionsForm!: FormGroup;
    

    ngOnInit(): void {
        this.quality = this.qualityService.getQualityByName(this.qualityReference.name);
        this.generateForms();
        this.setQualityOptions();
    }

    generateForms(): void {
        this.generateRatingForm();
        this.generateOptionForm();
    }

    generateRatingForm(): void {
        if(this.qualityReference.maxRating > 1) {

            this.ratingForm = this.formBuilder.group({
                ratingValue: [this.qualityReference.ratingValue]
            });

            this.ratingForm.valueChanges.subscribe((formData: any) => {
                this.qualityReference.ratingValue = formData.ratingValue;
                this.qualityReferenceRatingChange.emit(this.qualityReference);
            });
        }
    }

    generateOptionForm(): void {
        if(this.quality && this.quality?.options) {

            this.optionsForm = this.formBuilder.group({
                option: [this.qualityReference.optionSelection]
            });

            this.optionsForm.valueChanges.subscribe((formData: any) => {
                this.qualityReference.optionSelection = formData.option;
                this.qualityReferenceOptionChange.emit(this.qualityReference);
            });
        }
    }

    setQualityOptions(): void {
        if(this.quality && this.quality.options) {
            this.options = this.quality.options;
        }
    }

    emitRemoveQualityEvent(): void {
        this.removeQualityEvent.emit(this.qualityReference);
    }

    getQualityMaxRating(qualityName: string): number {
       let maxRating = this.qualityService.getQualityMaxRating(qualityName);

        if(maxRating) {
            return maxRating;
        }

       return 0;
    }

    get optionFormValue(): string {
        return this.optionsForm.get("option")?.value;
    }

    get optionDescription(): string {
        const option = this.options.find(option => option.name === this.optionFormValue);
        return option?.description || "";
    }
}
