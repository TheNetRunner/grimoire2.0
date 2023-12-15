import { Component, Input, OnInit, inject } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/character.model';
import { Quality } from '../../models/quality.model';
import { CharacterService } from '../../services/character.service';
import { DataStoreService } from '../../services/data-store.service';
import { positiveQualities, negativeQualities } from '../../data/qualities.data';


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
        this.setPositiveQualitiesOptions();
        this.setNegativeQualitiesOptions();
    }

    // Positive Qualities

    addPositiveQuality(quality: Quality): void {
        this.character.qualities.positive.push(quality);

        this.dataStoreService.updateCharacter(this.character.id, this.character);
        this.setPositiveQualitiesOptions();
    }

    removePositiveQuality(quality: Quality): void {
        this.character.qualities.positive = this.character.qualities.positive.filter(q => q.name !== quality.name);

        this.dataStoreService.updateCharacter(this.character.id, this.character);
        this.setPositiveQualitiesOptions();
    }

    private setPositiveQualitiesOptions(): void {
        this.availablePositiveQualities = this.characterService.getUnselectedPositiveQualities(this.character);
    }

    handleExceptionalAttributeChange(quality: Quality): void {
        this.removeExceptionalAttributeQuality();
        this.addPositiveQuality(quality);
    }

    private removeExceptionalAttributeQuality(): void {
        this.character.qualities.positive = this.character.qualities.positive.filter(q => q.name !== "Exceptional Attribute");
    }

    // Negative Qualities
    addNegativeQuality(quality: Quality): void {
        this.character.qualities.negative.push(quality);

        this.dataStoreService.updateCharacter(this.character.id, this.character);
        this.setNegativeQualitiesOptions();
    }

    removeNegativeQuality(quality: Quality): void {
        this.character.qualities.negative = this.character.qualities.negative.filter(q => q.name !== quality.name);

        this.dataStoreService.updateCharacter(this.character.id, this.character);
        this.setNegativeQualitiesOptions();
    }

    private setNegativeQualitiesOptions(): void {
        this.availableNegativeQualities = this.characterService.getUnselectedNegativeQualities(this.character);
    }

    get remainingStartingKarma(): number {
        return this.characterService.getRemainingStartingKarma(this.character);
    }

    get selectedPositiveQualities(): Quality[] {
        return this.character.qualities.positive;
    }

    get selectedNegativeQualities(): Quality[] {
        return this.character.qualities.negative;
    }
}
