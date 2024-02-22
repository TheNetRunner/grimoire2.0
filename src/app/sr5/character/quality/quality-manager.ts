import { v4 as uuidv4 } from 'uuid';

import { Shadowrun5ECharacterData } from '../interfaces/shadowrun-5e-character-data.interface';
import { Quality, QualityReference } from './quality.interface';
import { AttributeName, SpecialAttributeName } from '../interfaces/attribute.interface';

export default class QualityManager {
    private positiveQualities: QualityReference[] = [];
    private negativeQualities: QualityReference[] = [];

    constructor(characterData: Shadowrun5ECharacterData) {
        this.positiveQualities = characterData.qualities.positive;
        this.negativeQualities = characterData.qualities.negative;
    }

    get qualityReferences() {
        return {
            positive: this.positiveQualities,
            negative: this.negativeQualities
        }
    }

    get qualityReferenceArray() {
        return [...this.positiveQualities, ...this.negativeQualities];
    }

    get positiveQualityReferences() {
        return this.positiveQualities
    }

    get negativeQualityReferences() {
        return this.negativeQualities
    }

    get selectedQualityNames(): string[] {
        const allQualities = this.qualityReferenceArray;
        const selectedQualityNames: string[] = [];

        for(const quality of allQualities) {
            selectedQualityNames.push(quality.name);
        }

        return selectedQualityNames;
    }

    addPositiveQuality(quality: Quality): void {
        const newQualityReference = this.createQualityReference(quality);
        this.positiveQualities.push(newQualityReference);
    }

    addNegativeQuality(quality: Quality): void {
        const newQualityReference = this.createQualityReference(quality);
        this.negativeQualities.push(newQualityReference);
    }

    removeQuality(qualityId: string): void {
        const postiveIndex = this.positiveQualities.findIndex(q => q.id === qualityId);
        const negativeIndex = this.negativeQualities.findIndex(q => q.id === qualityId);

        if(postiveIndex > -1) {
            this.positiveQualities.splice(postiveIndex, 1);
        }
        
        if(negativeIndex > -1) {
            this.negativeQualities.splice(negativeIndex, 1);
        }
    }

    updatePositiveQuality(qualityReferenceUpdate: QualityReference): void {
        const index = this.positiveQualities.findIndex(q => q.id === qualityReferenceUpdate.id);

        if(qualityReferenceUpdate.name === "natural immunity") {
            
            if(qualityReferenceUpdate.optionSelection === "minimal") {
                qualityReferenceUpdate.karmaCost = 4;
            }

            if(qualityReferenceUpdate.optionSelection === "maximum") {
                qualityReferenceUpdate.karmaCost = 10;
            }
        }

        if(qualityReferenceUpdate.name === "resistant to pathogens / toxins") {
            
            if(qualityReferenceUpdate.optionSelection === "minimal") {
                qualityReferenceUpdate.karmaCost = 4;
            }

            if(qualityReferenceUpdate.optionSelection === "maximum") {
                qualityReferenceUpdate.karmaCost = 8;
            }
        }

        if(index > -1) {
            this.positiveQualities[index] = qualityReferenceUpdate;
        }
    }

    updateNegativeQuality(qualityReferenceUpdate: QualityReference): void {
        const index = this.negativeQualities.findIndex(q => q.id === qualityReferenceUpdate.id);

        if(qualityReferenceUpdate.name === "addiction") {
            switch(qualityReferenceUpdate.optionSelection) {
                case "mild":
                    qualityReferenceUpdate.karmaCost = 4;
                    break;
                case "moderate":
                    qualityReferenceUpdate.karmaCost = 9;
                    break;
                case "severe":
                    qualityReferenceUpdate.karmaCost = 20;
                    break;
                case "burnout":
                    qualityReferenceUpdate.karmaCost = 25;
                    break;
            }
        }

        if(qualityReferenceUpdate.name.includes("allergy")) {
            let baseCost = 2;

            if(qualityReferenceUpdate.name.includes("(uncommon)")) {
                baseCost = 7;
            }

            switch(qualityReferenceUpdate.optionSelection) {
                case "mild":
                    qualityReferenceUpdate.karmaCost = baseCost + 3;
                    break;
                case "moderate":
                    qualityReferenceUpdate.karmaCost = baseCost + 8;
                    break;
                case "severe":
                    qualityReferenceUpdate.karmaCost = baseCost + 13;
                    break;
                case "extreme":
                    qualityReferenceUpdate.karmaCost = baseCost + 18;
                    break;
            }
        }

        if (qualityReferenceUpdate.name.includes("prejudiced")) {
            
            let baseCost = 5;

            if(qualityReferenceUpdate.name.includes("(specific target group)")) {
                baseCost = 3;
            }

            switch(qualityReferenceUpdate.optionSelection) {
                case "biased":
                    qualityReferenceUpdate.karmaCost = baseCost;
                    break;
                case "outspoken":
                    qualityReferenceUpdate.karmaCost = baseCost + 2;
                    break;
                case "radical":
                    qualityReferenceUpdate.karmaCost = baseCost + 5;
                    break;
            }
        }

        if(index > -1) {
            this.negativeQualities[index] = qualityReferenceUpdate;
        }
    }

    private createQualityReference(quality: Quality): QualityReference {
        const newQualityReference: QualityReference = {
            id: this.generateQualityReferenceId(),
            name: quality.name,
            karmaCost: quality.karmaCost,
            ratingValue: 1,
            maxRating: quality.maxRating,
            optionSelection: "",
            attribute: undefined
        }

        if(newQualityReference.name === "exceptional attribute") {
            newQualityReference.attribute = AttributeName.Body;
        }

        if(newQualityReference.name === "lucky") {
            newQualityReference.attribute = SpecialAttributeName.Edge;
        }

        if(newQualityReference.name === "home ground") {
            newQualityReference.optionSelection = "astral acclimation";
        }

        if(newQualityReference.name === "natural immunity") {
            newQualityReference.optionSelection = "minimal";
        }

        if(newQualityReference.name.includes("resistant to pathogens")) {
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

    private generateQualityReferenceId(): string {
        let id: string;

        do { id = uuidv4().slice(-8) } while (!this.isQualityReferenceIdUnique(id));

        return id;
    }

    private isQualityReferenceIdUnique(id: string): boolean {
        const allQualities = [...this.positiveQualities, ...this.negativeQualities];

        return !allQualities.find(q => q.id === id);
    }

    getTotalQualityKarmaCost(): number {
        let karmaCost = 0;

        for(const qualityReference of this.positiveQualityReferences) {
            karmaCost += qualityReference.karmaCost * qualityReference.ratingValue;
        }

        for(const qualityReference of this.negativeQualityReferences) {
            karmaCost -= qualityReference.karmaCost * qualityReference.ratingValue;
        }

        return karmaCost;

    }
}