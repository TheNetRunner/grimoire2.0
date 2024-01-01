import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataStoreService } from '../../../services/data-store.service';
import { ShadowRun5ECharacter } from '../../../character/character';
import { Quality, QualityReference } from '../../../character/interfaces/quality.interface';

import { positiveQualities, negativeQualities } from '../../../character/data/qualities.data';

@Component({
  selector: 'app-quality-step',
  templateUrl: './quality-step.component.html',
  styleUrl: './quality-step.component.css'
})
export class QualityStepComponent implements OnInit {
    private dataService = inject(DataStoreService);
    private formBuilder = inject(FormBuilder);

    @Input() character!: ShadowRun5ECharacter;
    
    positiveQualityOptions: Quality[] = [];
    negativeQualityOptions: Quality[] = [];
    searchFilterForm!: FormGroup;

    ngOnInit(): void {
        this.setQualityOptions();
        this.setSearchFilterForm();
    }

    setQualityOptions(filterString: string = ""): void {
        this.positiveQualityOptions = this.setPostiveQualityOptions(filterString);
        this.negativeQualityOptions = this.setNegativeQualityOptions(filterString);
    }

    setPostiveQualityOptions(filterString: string = ""): Quality[] {
        const selectedQualityNames = this.character.qualityManager.selectedQualityNames;
        let unselectedQualities: Quality[] = [];

        for(let quality of positiveQualities) {
            if(!selectedQualityNames.includes(quality.name) && quality.name.includes(filterString)) {
                unselectedQualities.push(quality);
            }
        }

        return unselectedQualities;
    }

    setNegativeQualityOptions(filterString: string = ""): Quality[] {
        const selectedQualityNames = this.character.qualityManager.selectedQualityNames;
        let unselectedQualities: Quality[] = [];

        for(let quality of negativeQualities) {
            if(!selectedQualityNames.includes(quality.name) && quality.name.includes(filterString)) {
                unselectedQualities.push(quality);
            }
        }

        return unselectedQualities;
    }

    setSearchFilterForm(): void {
        this.searchFilterForm = this.formBuilder.group({
            filterString: [""],
            positiveQualities: [false],
            negativeQualities: [false]
        });

        this.searchFilterForm.valueChanges.subscribe((formData: any) => {
            this.setQualityOptions(formData.filterString);

            if(formData.positiveQualities && !formData.negativeQualities) {
                this.negativeQualityOptions = [];
            }

            if(!formData.positiveQualities && formData.negativeQualities) { 
                this.positiveQualityOptions = []; 
            }
        });
    }
    
    addQualityReference(quality: Quality): void {
        this.character.addQuality(quality);
        this.updateCharacter();

        this.setQualityOptions();
    }

    updateQualityReference(qualityReferenceUpdate: QualityReference, qualityType: string): void {
        this.character.updateQuality(qualityReferenceUpdate, qualityType);
        this.dataService.updateCharacter(this.character.id, this.character.getSaveObject());

        this.setQualityOptions();
    }

    removeQualityReference(qualityReference: QualityReference): void {
        this.character.removeQuality(qualityReference);
        this.updateCharacter();

        this.setQualityOptions();
    }

    updateCharacter(): void {
        this.dataService.updateCharacter(this.character.id, this.character.getSaveObject());
    }
}
