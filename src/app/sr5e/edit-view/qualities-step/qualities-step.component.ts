import { Component, Input, OnInit, inject } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/character.model';
import { Quality, QualityReference } from '../../models/quality.interface';
import { CharacterService } from '../../services/character.service';
import { DataStoreService } from '../../services/data-store.service';
import { positiveQualities } from '../../data/qualities.data';
import { Attribute } from '../../models/attribute.interface';
import { QualityService } from '../../services/quality.service';


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

    ngOnInit(): void {
        this.setAvailablePositiveQualities();
        this.setNegativeQualitieOptions();
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
        const qualityMaxRating = this.qualityService.getQualityMaxRating(qualityName);
        const qualityKarmaCost = this.qualityService.getQualityKarmaCost(qualityName);

        this.character.addPositiveQualityReference(qualityName, qualityMaxRating, qualityKarmaCost);
        
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());

        this.setAvailablePositiveQualities();
    }

    removePositiveQuality(qualityName: string): void {
        this.character.removePositiveQualityReference(qualityName);
        this.setAvailablePositiveQualities();
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    updatePositiveQualityReferenceRatingValue(qualityId: string, newRatingValue: number): void {
        this.character.updatePositiveQualityReferenceRatingValue(qualityId, newRatingValue);
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    setExceptionalAttribute(attribute: Attribute): void {
        this.character.setAttributeAsExceptional(attribute);
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    // Negative Qualities

    setNegativeQualitieOptions(): void {
        this.availableNegativeQualities = this.qualityService.getUnselectedNegativeQualities(
            this.character.negativeQualities);
    }

    get characterNegativeQualities(): QualityReference[] {
        return this.character.negativeQualities;
    }

    addNegativeQuality(qualityName: string): void {
        const qualityMaxRating = this.qualityService.getQualityMaxRating(qualityName);
        const qualityKarmaCost = this.qualityService.getQualityKarmaCost(qualityName);

        this.character.addNegativeQualityReference(qualityName, qualityMaxRating, qualityKarmaCost);

        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());

        this.setNegativeQualitieOptions();
    }

    removeNegativeQuality(qualityName: string): void {
        this.character.removeNegativeQualityReference(qualityName);
        this.setNegativeQualitieOptions();
        this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
    }

    // Other
    get remainingStartingKarama(): number {
        return this.character.remainingStartingKarama;
    }
}
