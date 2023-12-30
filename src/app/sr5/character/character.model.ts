import { v4 as uuidv4 } from 'uuid';

import AttributeHandler from './attribute-handler';

import { ShadowRun5ECharacterData, BasicInformation } from './interfaces/character.interface';
import { AttributeName, MagicAttributeName } from './interfaces/attribute.interface';
import { AttributeData } from "./interfaces/character.interface";
import { Priority } from './interfaces/priority.interface';
import { PrioritiesData } from './interfaces/character.interface';
import { MetaType } from './interfaces/meta-type.interface';
import { MagicUserType } from './interfaces/magic.interface';
import { QualityReference } from './interfaces/quality.interface';
import { LevelOfPlayName } from './interfaces/settings.interface';


export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    private ah: AttributeHandler;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
        this.ah = new AttributeHandler(characterData);
    }

    // ID

    get id(): string {
        return this.characterData.id;
    }

    // Basic

    get basic(): BasicInformation {
        return this.characterData.basic;
    }

    set basic(basic: BasicInformation) {
        this.characterData.basic = basic;
    }

    set bio(bio: string) {
        this.characterData.basic.bio = bio;
    }

    get imageName(): string {
        return this.characterData.imageName;
    }

    set imageName(imageName: string) {
        this.characterData.imageName = imageName;
    }

    // MetaType

    get metaType(): MetaType {
        return this.characterData.metaType;
    }

    handleMetaTypeChange(metaType: MetaType): void {
        this.characterData.metaType = metaType;
        this.characterData.imageName = `${metaType}_one`;
    }

    // Priority

    get priorities(): PrioritiesData {
        return this.characterData.priorities;
    }

    set priorities(priorities: PrioritiesData) {
        this.characterData.priorities = priorities;
    }

    handleMetaTypePriorityChange(priority: Priority): void {
        this.characterData.priorities.metaType = priority;
        this.characterData.metaType = MetaType.Human;
        this.characterData.imageName = "human_one";
    }

    handleMagicPriorityChange(priority: Priority): void {
        this.characterData.priorities.magic = priority;
        this.characterData.magic.magicUserType = MagicUserType.None;
    }

    // Final Calculations CRB:101

    get physicalLimit(): number {
        const strengthTotal = this.ah.getAttributeTotalValue(Attribute.Strength);
        const bodyTotal = this.ah.getAttributeTotalValue(Attribute.Body);
        const reactionTotal = this.ah.getAttributeTotalValue(Attribute.Reaction);

        return Math.ceil(((strengthTotal * 2) + bodyTotal + reactionTotal) / 3);
    }

    get mentalLimit(): number {
        const logicTotal = this.ah.getAttributeTotalValue(Attribute.Logic);
        const intuitionTotal = this.ah.getAttributeTotalValue(Attribute.Intuition);
        const willPowerTotal = this.ah.getAttributeTotalValue(Attribute.WillPower);

        return Math.ceil(((logicTotal * 2) + willPowerTotal + intuitionTotal) / 3);
    }

    get socialLimit(): number {
        const charismaTotal = this.ah.getAttributeTotalValue(Attribute.Charisma);
        const willPowerTotal = this.ah.getAttributeTotalValue(Attribute.WillPower);
        const essence = this.characterData.essence;

        return Math.ceil(((charismaTotal * 2) + willPowerTotal + essence) / 3);
    }

    get initiative(): number {
        let initiative = 0;

        const reaction = this.ah.getAttributeTotalValue(Attribute.Reaction);
        const intuition = this.ah.getAttributeTotalValue(Attribute.Intuition);

        initiative = reaction + intuition;

        return initiative;
    }

    get essence(): number {
        return this.characterData.essence;
    }

    // Quality

    get qualities(): typeof this.characterData.qualities {
        return this.characterData.qualities;
    }

    get positiveQualities(): typeof this.characterData.qualities.positive {
        return this.characterData.qualities.positive;
    }

    addPositiveQualityReference(qualityReference: QualityReference): void {
        qualityReference.id = this.generateQualityReferenceId();

        if(qualityReference.name === "exceptional attribute") {
            this.ah.setExceptionalAttribute(Attribute.Body);
        }

        if(qualityReference.name === "lucky") {
            this.ah.setExceptionalAttribute(Attribute.Edge);
        }

        this.characterData.qualities.positive.push(qualityReference);
    }

    removePositiveQualityReference(quality: QualityReference): void {
        if(quality.name === "exceptional attribute") {
            this.ah.setExceptionalAttribute(undefined);
        }

        const index = this.characterData.qualities.positive.findIndex(q => q.id === quality.id);
        this.characterData.qualities.positive.splice(index, 1);
    }

    updatePositiveQualityReference(qualityReference: QualityReference): void {
        const index = this.positiveQualities.findIndex(q => q.id === qualityReference.id);

        if(qualityReference.name === "exceptional attribute" && qualityReference.attribute) {
           this.ah.setExceptionalAttribute(qualityReference.attribute);
        }

        if(qualityReference.name === "lucky") {
            this.setAttributeAsExceptional(Attribute.Edge);
        }

        if(qualityReference.name === "natural immunity") {
            
            if(qualityReference.optionSelection === "minimal") {
                qualityReference.karmaCost = 4;
            }

            if(qualityReference.optionSelection === "maximum") {
                qualityReference.karmaCost = 10;
            }
        }

        if(qualityReference.name === "resistant to pathogens / toxins") {
            
            if(qualityReference.optionSelection === "minimal") {
                qualityReference.karmaCost = 4;
            }

            if(qualityReference.optionSelection === "maximum") {
                qualityReference.karmaCost = 8;
            }
        }

        if(index > -1) {
            this.characterData.qualities.positive[index] = qualityReference;
        }
    }

    get negativeQualities(): typeof this.characterData.qualities.negative {
        return this.characterData.qualities.negative;
    }

    addNegativeQualityReference(qualityReference: QualityReference): void {
        qualityReference.id = this.generateQualityReferenceId();
        this.negativeQualities.push(qualityReference);
    }

    removeNegativeQualityReference(qualityReference: QualityReference): void {
        const index = this.negativeQualities.findIndex(q => q.id === qualityReference.id);
        this.characterData.qualities.negative.splice(index, 1);
    }

    updateNegativeQualityReference(qualityReference: QualityReference): void {
        const index = this.positiveQualities.findIndex(q => q.id === qualityReference.id);

        if(qualityReference.name === "addiction") {
            switch(qualityReference.optionSelection) {
                case "mild":
                    qualityReference.karmaCost = 4;
                    break;
                case "moderate":
                    qualityReference.karmaCost = 9;
                    break;
                case "severe":
                    qualityReference.karmaCost = 20;
                    break;
                case "burnout":
                    qualityReference.karmaCost = 25;
                    break;
            }
        }

        if(qualityReference.name.includes("allergy")) {
            let baseCost = 2;

            if(qualityReference.name.includes("(uncommon)")) {
                baseCost = 7;
            }

            switch(qualityReference.optionSelection) {
                case "mild":
                    qualityReference.karmaCost = baseCost + 3;
                    break;
                case "moderate":
                    qualityReference.karmaCost = baseCost + 8;
                    break;
                case "severe":
                    qualityReference.karmaCost = baseCost + 13;
                    break;
                case "extreme":
                    qualityReference.karmaCost = baseCost + 18;
                    break;
            }
        }

        if (qualityReference.name.includes("prejudiced")) {
            
            let baseCost = 5;

            if(qualityReference.name.includes("(specific target group)")) {
                baseCost = 3;
            }

            switch(qualityReference.optionSelection) {
                case "biased":
                    qualityReference.karmaCost = baseCost;
                    break;
                case "outspoken":
                    qualityReference.karmaCost = baseCost + 2;
                    break;
                case "radical":
                    qualityReference.karmaCost = baseCost + 5;
                    break;
            }
        }

        if(index > -1) {
            this.characterData.qualities.negative[index] = qualityReference;
        }
    }

    getQualityReferenceKarmaCost(qualityReferenceId: string): number {
        let cost = 0;
        const qualityReference = this.getQualityReferenceById(qualityReferenceId);

        if(qualityReference) {
            cost = qualityReference.karmaCost * qualityReference.ratingValue;
        }

        return cost;
    }

    getQualityReferenceById(qualityReferenceId: string): QualityReference | undefined {
        const allQualities = [...this.positiveQualities, ...this.negativeQualities];

        return allQualities.find(q => q.name === qualityReferenceId);
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

    // Magic

    get magic(): typeof this.characterData.magic {
        return this.characterData.magic;
    }

    get magicUserType(): MagicUserType {
        return this.characterData.magic.magicUserType;
    }

    // Karma

    get startingKarma(): number {
        return this.characterData.startingKarma;
    }

    set startingKarma(startingKarma: number) {
        this.characterData.startingKarma = startingKarma;
    }

    get karmaPoints(): number {
        return this.characterData.karmaPoints;
    }

    set karmaPoints(karmaPoints: number) {
        this.characterData.karmaPoints = karmaPoints;
    }

    get QualityKarmaSpend(): number {
        let spend = 0;

        for(const qualityReference of this.characterData.qualities.positive) {
            spend += (qualityReference.karmaCost * qualityReference.ratingValue);
        }

        for(const qualityReference of this.characterData.qualities.negative) {
            spend -= (qualityReference.karmaCost * qualityReference.ratingValue);
        }

        return spend;
    }

    get remainingStartingKarama(): number {
        return this.characterData.startingKarma - this.QualityKarmaSpend;
    }

    // Nuyen
    
    get nuyen(): number {
        return this.characterData.nuyen;
    }

    set nuyen(nuyen: number) {
        this.characterData.nuyen = nuyen;
    }

    // Settings

    get settings(): typeof this.characterData.settings{
        return this.characterData.settings;
    }

    set levelOfPlay(levelOfPlay: LevelOfPlay) {
        this.characterData.settings.levelOfPlay = levelOfPlay;
    }

    // Save

    getSaveObject(): ShadowRun5ECharacterData {
        return this.characterData;
    }
}