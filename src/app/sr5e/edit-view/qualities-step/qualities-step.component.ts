import { Component, Input, OnInit, inject } from '@angular/core';

import { Attribute } from '../../models/attribute.interface';
import { DataStoreService } from '../../services/data-store.service';
import { Quality, QualityReference } from '../../models/quality.interface';
import { QualityService } from '../../services/quality.service';
import { ShadowRun5ECharacter } from '../../models/character.model';

@Component({
  selector: 'app-qualities-step',
  templateUrl: './qualities-step.component.html',
  styleUrl: './qualities-step.component.css'
})
export class QualitiesStepComponent implements OnInit {
    private qualityService = inject(QualityService);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    availablePositiveQualities: Quality[] = [];
    availableNegativeQualities: Quality[] = [];
    positiveQualitiesCollapsed = true;
    negativeQualitiesCollapsed = true;

    ngOnInit(): void {
        this.setAvailablePositiveQualities();
        this.setAvailableNegativeQualities();
    }

    // Positive Qualities

    setAvailablePositiveQualities(): void {
        this.availablePositiveQualities = this.qualityService.getUnselectedPositiveQualities(
            this.character.positiveQualities);
    }

    get characterPositiveQualities(): QualityReference[] {
        return this.character.positiveQualities;
    }

    addPositiveQuality(qualityName: string): void {
        const qualityReference = this.qualityService.createQualityReference(qualityName);

        if(qualityReference) {
            this.character.addPositiveQualityReference(qualityReference);
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
            this.setAvailablePositiveQualities();
        }
    }

    removePositiveQuality(qualityReference: QualityReference): void {
        this.character.removePositiveQualityReference(qualityReference);
        this.setAvailablePositiveQualities();
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    setExceptionalAttribute(attribute: Attribute): void {
        this.character.setAttributeAsExceptional(attribute);
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    updatePositiveQualityReference(qualityReference: QualityReference): void {
        this.character.updatePositiveQualityReference(qualityReference);
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    // Negative Qualities

    setAvailableNegativeQualities(): void {
        this.availableNegativeQualities = this.qualityService.getUnselectedNegativeQualities(
            this.character.negativeQualities);
    }

    get characterNegativeQualities(): QualityReference[] {
        return this.character.negativeQualities;
    }

    addNegativeQuality(qualityName: string): void {
        const qualityReference = this.qualityService.createQualityReference(qualityName);

        if(qualityReference) {
            this.character.addNegativeQualityReference(qualityReference);
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
            this.setAvailableNegativeQualities();
        }
    }

    removeNegativeQuality(qualityReference: QualityReference): void {
        this.character.removeNegativeQualityReference(qualityReference);
        this.setAvailableNegativeQualities();
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    updateNegativeQualityReference(qualityReference: QualityReference): void {
        this.character.updateNegativeQualityReference(qualityReference);
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

}
