import { Injectable } from '@angular/core';

import { Quality, QualityReference } from '../models/quality.interface';
import { positiveQualities, negativeQualities } from '../data/qualities.data';
import { Attribute } from '../models/attribute.interface';
import { ShadowRun5ECharacter } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class QualityService {
    getUnselectedPositiveQualities(qualityReferences: QualityReference[]): Quality[] {
        return positiveQualities.filter(quality => {
            return qualityReferences.find(
                qualityReference => qualityReference.name === quality.name);
        });
    }

    getUnselectedNegativeQualities(qualityReferences: QualityReference[]): Quality[] {
        return negativeQualities.filter(quality => {
            return qualityReferences.find(
                qualityReference => qualityReference.name === quality.name);
        });
    }
    
    getQualityMaxRating(qualityName: string): number {
        const quality = this.getQualityByName(qualityName);

        if(quality) {
            return quality.maxRating;
        }

        return 0;
    }

    getQualityKarmaCost(qualityName: string): number {
        const quality = this.getQualityByName(qualityName);

        if(quality) {
            return quality.karmaCost;
        }

        return 0;
    }

    getQualityByName(qualityName: string): Quality | undefined {
        const allQualities = [...positiveQualities, ...negativeQualities];
        return allQualities.find(quality => quality.name === qualityName);
    }
}
