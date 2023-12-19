import { Component, Input, OnInit, inject } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/new-character.model';
import { Quality, QualityReference } from '../../models/quality.model';
import { CharacterService } from '../../services/character.service';
import { DataStoreService } from '../../services/data-store.service';
import { positiveQualities } from '../../data/qualities.data';
import { AttributeName, SpecialAttributeName } from '../../models/attribute.model';


@Component({
  selector: 'app-qualities-step',
  templateUrl: './qualities-step.component.html',
  styleUrl: './qualities-step.component.css'
})
export class QualitiesStepComponent implements OnInit {
    private characterService = inject(CharacterService);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    availablePositiveQualities: Quality[] = [];
    availableNegativeQualities: Quality[] = [];

    ngOnInit(): void {
        this.setPositiveQualitieOptions();
        this.setNegativeQualitieOptions();
    }

    // Positive Qualities

    setPositiveQualitieOptions(): void {
        this.availablePositiveQualities = this.characterService.getUnselectedPositiveQualities(this.character);
    }

    get characterPositiveQualities(): QualityReference[] {
        return this.character.qualities.positive;
    }

    addPositiveQuality(qualityName: string): void {
        this.characterService.addPositiveQuality(this.character, qualityName);
        this.setPositiveQualitieOptions();
    }

    removePositiveQuality(qualityName: string): void {
        const characterQualities = this.character.qualities.positive;
        const index = characterQualities.findIndex(q => q.name === qualityName);
        characterQualities.splice(index, 1);

        if(qualityName === 'exceptional attribute') {
            this.characterService.removeExceptionalAttribute(this.character);
        }

        this.dataStoreService.updateCharacter(this.character.id, this.character);
        this.setPositiveQualitieOptions();
    }

    updatePositiveQualityReferenceRatingValue(qualityReferenceUpdate: QualityReference): void {
        let positiveQualityReferences = this.character.qualities.positive;

        for(const pqr of positiveQualityReferences) {
            if(pqr.name === qualityReferenceUpdate.name) {
                pqr.ratingValue = qualityReferenceUpdate.ratingValue;
                break;
            }
        }

        this.character.qualities.positive = positiveQualityReferences;
        this.dataStoreService.updateCharacter(this.character.id, this.character);
    }

    updatePositiveQualityReferenceAttributeValue(qualityReference: QualityReference): void {
        let positiveQualityReferences = this.character.qualities.positive;

        for(const pqr of positiveQualityReferences) {
            if(pqr.name === qualityReference.name) {
                pqr.attribute = qualityReference.attribute;
                break;
            }
        }

        this.character.qualities.positive = positiveQualityReferences;
        this.dataStoreService.updateCharacter(this.character.id, this.character);
    }

    setExceptionalAttribute(attributeName: AttributeName | SpecialAttributeName): void {
        if (attributeName === SpecialAttributeName.Magic || attributeName === SpecialAttributeName.Resonance) {
            this.characterService.setSpecialExceptionalAttribute(this.character, attributeName);
        } else if (attributeName !== SpecialAttributeName.Edge) {
            this.characterService.setExceptionalAttribute(this.character, attributeName as AttributeName);
        }
    }

    // Negative Qualities

    setNegativeQualitieOptions(): void {
        this.availableNegativeQualities = this.characterService.getUnselectedNegativeQualities(this.character);
    }

    get characterNegativeQualities(): QualityReference[] {
        return this.character.qualities.negative;
    }

    addNegativeQuality(qualityName: string): void {
        this.characterService.addNegativeQuality(this.character, qualityName);
        this.setNegativeQualitieOptions();
    }

    removeNegativeQuality(qualityName: string): void {
        const characterQualities = this.character.qualities.negative;
        const index = characterQualities.findIndex(q => q.name === qualityName);
        characterQualities.splice(index, 1);
        this.dataStoreService.updateCharacter(this.character.id, this.character);

        this.setPositiveQualitieOptions();
    }

    // Other

    get remainingStartingKarama(): number {
        return this.characterService.getRemainingStartingKarma(this.character);
    }
}
