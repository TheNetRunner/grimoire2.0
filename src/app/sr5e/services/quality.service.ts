import { Injectable } from '@angular/core';

import { Attribute } from '../models/attribute.interface';
import { Quality, QualityReference } from '../models/quality.interface';
import { positiveQualities, negativeQualities } from '../data/qualities.data';

@Injectable({
  providedIn: 'root'
})
export class QualityService {
    createQualityReference(qualityName: string): QualityReference | undefined {
        const quality = this.getQualityByName(qualityName);

        if(quality) {
            const newQualityReference: QualityReference = {
                id: "",
                name: quality.name,
                karmaCost: quality.karmaCost,
                ratingValue: 1,
                maxRating: quality.maxRating,
                optionSelection: "",
                attribute: undefined
            };

            if(newQualityReference.name === "exceptional attribute") {
                newQualityReference.attribute = Attribute.Body;
            }

            // Home ground has options.
            if(newQualityReference.name === "home ground") {
                newQualityReference.optionSelection = "astral acclimation";
            }

            if(newQualityReference.name === "natural immunity" || newQualityReference.name.includes("resistant to pathogens")) {
                newQualityReference.optionSelection = "minimal";
            }

            if(newQualityReference.name === "addiction") {
                newQualityReference.optionSelection = "mild";
                newQualityReference.karmaCost = 4;
            }

            if(newQualityReference.name === "allergy (common)") {
                newQualityReference.optionSelection = "mild";
                newQualityReference.karmaCost = 2 + 3;
            }

            if(newQualityReference.name === "allergy (uncommon)") {
                newQualityReference.optionSelection = "mild";
                newQualityReference.karmaCost = 7 + 3;
            }

            if(newQualityReference.name.includes("prejudiced")) {
                newQualityReference.optionSelection = "biased";
            }

            return newQualityReference;
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
