import { Injectable } from '@angular/core';

import { Quality, QualityReference } from '../models/quality.interface';
import { positiveQualities, negativeQualities } from '../data/qualities.data';

@Injectable({
  providedIn: 'root'
})
export class QualityService {
    createQualityReference(qualityName: string): QualityReference | undefined {
        const quality = this.getQualityByName(qualityName);

        if(quality) {
            return {
                id: "",
                name: quality.name,
                karmaCost: quality.karmaCost,
                ratingValue: 1,
                maxRating: quality.maxRating,
                optionSelection: "",
                attribute: undefined
            };
        }

        return undefined;
    }

    getUnselectedPositiveQualities(qualityReferences: QualityReference[]): Quality[] {
        let diff: Quality[] = [];

        for(const quality of positiveQualities) {
            const found = qualityReferences.find(qualityReference => qualityReference.name === quality.name);

            // Home ground can be added multiple times
            if(!found || found.name === "home ground") {
                diff.push(quality);
            }
        }

        return diff;
    }

    getUnselectedNegativeQualities(qualityReferences: QualityReference[]): Quality[] {
        let diff: Quality[] = [];

        for(const quality of negativeQualities) {
            const found = qualityReferences.find(qualityReference => qualityReference.name === quality.name);

            if(!found) {
                diff.push(quality);
            }
        }

        return diff;
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
