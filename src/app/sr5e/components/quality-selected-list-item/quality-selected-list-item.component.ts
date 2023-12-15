import { Component, Input, Output, inject, EventEmitter, OnInit } from '@angular/core';

import { QualityReference, Quality } from '../../models/quality.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-quality-selected-list-item',
  templateUrl: './quality-selected-list-item.component.html',
  styleUrl: './quality-selected-list-item.component.css'
})
export class QualitySelectedListItemComponent implements OnInit {
    private characterService = inject(CharacterService);

    @Input() qualityReference!: QualityReference;
    @Output() removeQualityEvent = new EventEmitter<string>();

    isCollapsed = true;
    quality!: Quality | undefined;

    ngOnInit(): void {
        this.quality = this.characterService.getQualityByName(this.qualityReference.name);
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
}
