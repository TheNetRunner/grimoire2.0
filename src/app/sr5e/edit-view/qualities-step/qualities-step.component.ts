import { Component, Input, OnInit, inject } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/character.model';
import { Quality, QualityReference } from '../../models/quality.model';
import { CharacterService } from '../../services/character.service';
import { DataStoreService } from '../../services/data-store.service';


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
        const qualityRefernce = this.characterService.createQualityReference(qualityName);
        this.character.qualities.positive.push(qualityRefernce);
        this.dataStoreService.updateCharacter(this.character.id, this.character);

        this.setPositiveQualitieOptions();
    }

    removePositiveQuality(qualityName: string): void {
        const characterQualities = this.character.qualities.positive;
        const index = characterQualities.findIndex(q => q.name === qualityName);
        characterQualities.splice(index, 1);
        this.dataStoreService.updateCharacter(this.character.id, this.character);

        this.setPositiveQualitieOptions();
    }

    // Negative Qualities

    setNegativeQualitieOptions(): void {
        this.availableNegativeQualities = this.characterService.getUnselectedNegativeQualities(this.character);
    }

    get characterNegativeQualities(): QualityReference[] {
        return this.character.qualities.negative;
    }

    addNegativeQuality(qualityName: string): void {
        const qualityRefernce = this.characterService.createQualityReference(qualityName);
        this.character.qualities.negative.push(qualityRefernce);
        this.dataStoreService.updateCharacter(this.character.id, this.character);

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
