import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataStoreService } from '../../../services/data-store.service';
import { Shadowrun5ECharacter } from '../../../character/shadowrun-5e-character';
import { Quality, QualityReference } from '../../../character/quality/quality.interface';

import { positiveQualities, negativeQualities } from '../../../character/data/qualities.data';

@Component({
  selector: 'app-quality-step',
  templateUrl: './quality-step.component.html',
  styleUrl: './quality-step.component.css'
})
export class QualityStepComponent implements OnInit {
    private dataService = inject(DataStoreService);
    private formBuilder = inject(FormBuilder);

    @Input() character!: Shadowrun5ECharacter;
    
    positiveQualityOptions: Quality[] = [];
    negativeQualityOptions: Quality[] = [];
    searchFilterForm!: FormGroup;

    ngOnInit(): void {
        this.setQualityOptions();
        this.setSearchFilterForm();
    }

    setQualityOptions(filterString: string = ""): void {
        const filterStringLower = filterString.toLowerCase();
        this.positiveQualityOptions = this.setPostiveQualityOptions(filterStringLower);
        this.negativeQualityOptions = this.setNegativeQualityOptions(filterStringLower);
    }

    setPostiveQualityOptions(filterString: string = ""): Quality[] {
        const filterStringLower = filterString.toLowerCase();
        const selectedQualityNames = this.character.qualityManager.selectedQualityNames;
        const unselectedQualities: Quality[] = [];

        for(const quality of positiveQualities) {
            if(!selectedQualityNames.includes(quality.name) && quality.name.includes(filterStringLower)) {
                unselectedQualities.push(quality);
            }
        }

        return unselectedQualities;
    }

    setNegativeQualityOptions(filterString: string = ""): Quality[] {
        const filterStringLower = filterString.toLowerCase();
        const selectedQualityNames = this.character.qualityManager.selectedQualityNames;
        const unselectedQualities: Quality[] = [];

        for(const quality of negativeQualities) {
            if(!selectedQualityNames.includes(quality.name) && quality.name.includes(filterStringLower)) {
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
        this.dataService.updateCharacter(this.character.id, this.character.saveObject);

        this.setQualityOptions();
    }

    removeQualityReference(qualityReference: QualityReference): void {
        this.character.removeQuality(qualityReference);
        this.updateCharacter();

        this.setQualityOptions();
    }

    updateCharacter(): void {
        this.dataService.updateCharacter(this.character.id, this.character.saveObject);
    }
}
