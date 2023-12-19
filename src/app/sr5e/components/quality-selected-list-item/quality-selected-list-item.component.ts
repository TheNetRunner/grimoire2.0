import { Component, Input, Output, inject, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QualityReference, Quality, QualityOption } from '../../models/quality.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-quality-selected-list-item',
  templateUrl: './quality-selected-list-item.component.html',
  styleUrl: './quality-selected-list-item.component.css'
})
export class QualitySelectedListItemComponent implements OnInit {
    private characterService = inject(CharacterService);
    private formBuilder = inject(FormBuilder);

    @Input() qualityReference!: QualityReference;
    @Output() qualityReferenceRatingChange = new EventEmitter<QualityReference>();
    @Output() qualityReferenceOptionChange = new EventEmitter<QualityReference>();
    @Output() removeQualityEvent = new EventEmitter<string>();

    isCollapsed = true;
    quality!: Quality | undefined;
    ratingForm!: FormGroup;
    options: QualityOption[] = [];
    optionsForm!: FormGroup;
    

    ngOnInit(): void {
        this.quality = this.characterService.getQualityByName(this.qualityReference.name);
        this.generateForms();
        this.setQualityOptions();
    }

    generateForms(): void {
        this.generateRatingForm();
        this.generateOptionForm();
    }

    generateRatingForm(): void {
        if(this.quality && this.quality?.maxRating > 1) {

            this.ratingForm = this.formBuilder.group({
                rating: [this.qualityReference.ratingValue]
            });

            this.ratingForm.valueChanges.subscribe((formData: any) => {
                this.qualityReference.ratingValue = formData.rating;
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
        this.removeQualityEvent.emit(this.qualityReference.name);
    }

    getQualityMaxRating(qualityName: string): number {
       let maxRating = this.characterService.getQualityMaxRating(qualityName);

        if(maxRating) {
            return maxRating;
        }

       return 0;
    }

    getQualityKarmaCost(): number {
        const currentRating = this.qualityReference.ratingValue || 1;
        return this.characterService.getQualityKarmaCost(currentRating, this.qualityReference.name);
    }

    get optionFormValue(): string {
        return this.optionsForm.get("option")?.value;
    }

    get optionDescription(): string {
        const option = this.options.find(option => option.name === this.optionFormValue);
        return option?.description || "";
    }
}
