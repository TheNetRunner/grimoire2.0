import { v4 as uuidv4 } from 'uuid';

import { ShadowRun5ECharacterData } from '../interfaces/character.interface';
import { Quality, QualityReference } from '../interfaces/quality.interface';
import { AttributeName } from '../interfaces/attribute.interface';

export default class QualityHandler {
    private positiveQualities: QualityReference[] = [];
    private negativeQualities: QualityReference[] = [];

    constructor(characterData: ShadowRun5ECharacterData) {
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
        const allQualities = [...this.positiveQualities, ...this.negativeQualities];
        let selectedQualityNames: string[] = [];

        for(let quality of allQualities) {
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

        if(index > -1) {
            this.positiveQualities.splice(index, 1, qualityReferenceUpdate);
        }
    }

    updateNegativeQuality(qualityReferenceUpdate: QualityReference): void {
        const index = this.negativeQualities.findIndex(q => q.id === qualityReferenceUpdate.id);

        if(index > -1) {
            this.positiveQualities.splice(index, 1, qualityReferenceUpdate);
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
}