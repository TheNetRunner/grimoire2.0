import { v4 as uuidv4 } from 'uuid';

import { ShadowRun5ECharacterData, BasicInformation } from './character.interface';
import { Attribute, MagicAttribute } from './attribute.interface';
import { AttributeData } from './character.interface';
import { Priority } from './priority.interface';
import { PrioritiesData } from './character.interface';
import { MetaType } from './meta-type.model';
import { MagicUserType } from './magic.interface';
import { QualityReference } from './quality.interface';
import { LevelOfPlay } from './settings.interface';

export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
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

    // Attribute

    get attributes(): typeof this.characterData.attributes {
        return this.characterData.attributes;
    }

    getExceptionalAttribute(): AttributeData | undefined {
        for(const attributeName in this.characterData.attributes) {
            const attribute = this.getAttributeByName(attributeName as Attribute);

            if(attribute.exceptional) {
                return attribute;
            }
        }

        return undefined;
    }

    getAttributeByName(Attribute: Attribute): AttributeData {
        return this.characterData.attributes[Attribute];
    }

    getAttributeTotalValue(Attribute: Attribute): number {
        const attribute = this.characterData.attributes[Attribute];
        return attribute.racialBaseValue || 1 + attribute.buildPoints + attribute.increases
    }

    getAttributeBuildPointsTotal(): number {
        let total = 0;

        for(const attribute in this.characterData.attributes) {
            const key = attribute as keyof typeof this.characterData.attributes;

            if(attribute !== Attribute.Edge) {
                total += this.characterData.attributes[key].buildPoints;
            }
        }

        return total;
    }

    getAttributeIncreasesTotal(): number {
        let total = 0;

        for(const attribute in this.characterData.attributes) {
            const key = attribute as keyof typeof this.characterData.attributes;

            if(attribute !== Attribute.Edge) {
                total += this.characterData.attributes[key].increases;
            }
        }

        return total;
    }

    getAttributeIncreaseCostTotal(): number {
        let total = 0;

        for(const attribute in this.characterData.attributes) {
            const key = attribute as keyof typeof this.characterData.attributes;

            if(attribute !== Attribute.Edge) {
                total += this.getAttributeIncreaseCost(key as Attribute);
            }
        }

        return total;
    }

    getAttributeIncreaseCost(attribute: Attribute): number {
        let totalIncreaseSpent = 0;
        const attr = this.getAttributeByName(attribute);

        const attributeStartingValue = attr.racialBaseValue || 1;
        const attributeBuildPoints = attr.buildPoints;
        const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;

        for(let i = 1; i <= attr.increases; i++) {
            // The calculation is the (new rating * 5) CRB:107
            const newRating = attributeValueBeforeIncreases + i;
            totalIncreaseSpent = totalIncreaseSpent + (newRating * 5);
        }

        return totalIncreaseSpent;
    }

    setAttributeAsExceptional(attribute: Attribute | MagicAttribute): void {
        this.resetAttributeExceptionalStatus();

        console.log(attribute);

        if (attribute === MagicAttribute.Magic) {
            this.characterData.magic.attributes.magic.exceptional = true;
            return;
        }

        if (attribute === MagicAttribute.Resonance) {
            this.characterData.magic.attributes.resonance.exceptional = true;
            return;
        }

        this.characterData.attributes[attribute].exceptional = true;
    }

    resetAttributeExceptionalStatus(): void {
        for(const attribute in this.characterData.attributes) {
            const key = attribute as keyof typeof this.characterData.attributes;
            this.characterData.attributes[key].exceptional = false;
        }

        for(const magicAttribute in this.characterData.magic.attributes) {
            const key = magicAttribute as keyof typeof this.characterData.magic.attributes;
            this.characterData.magic.attributes[key].exceptional = false;
        }
    }

    isAttributeAboveMaximum(attribute: Attribute): boolean {
        const attributeData = this.getAttributeByName(attribute);
        let maximum = 0;

        if(attributeData.racialMaxValue) {
            maximum = attributeData.racialMaxValue;
        }

        if(attributeData.exceptional) {
            maximum = maximum + 1;
        }

        return this.getAttributeTotalValue(attribute) > maximum;
    }

    // Final Calculations CRB:101

    get physicalLimit(): number {
        const strengthTotal = this.getAttributeTotalValue(Attribute.Strength);
        const bodyTotal = this.getAttributeTotalValue(Attribute.Body);
        const reactionTotal = this.getAttributeTotalValue(Attribute.Reaction);

        return Math.ceil(((strengthTotal * 2) + bodyTotal + reactionTotal) / 3);
    }

    get mentalLimit(): number {
        const logicTotal = this.getAttributeTotalValue(Attribute.Logic);
        const intuitionTotal = this.getAttributeTotalValue(Attribute.Intuition);
        const willPowerTotal = this.getAttributeTotalValue(Attribute.WillPower);

        return Math.ceil(((logicTotal * 2) + willPowerTotal + intuitionTotal) / 3);
    }

    get socialLimit(): number {
        const charismaTotal = this.getAttributeTotalValue(Attribute.Charisma);
        const willPowerTotal = this.getAttributeTotalValue(Attribute.WillPower);
        const essence = this.characterData.essence;

        return Math.ceil(((charismaTotal * 2) + willPowerTotal + essence) / 3);
    }

    get initiative(): number {
        let initiative = 0;

        const reaction = this.getAttributeTotalValue(Attribute.Reaction);
        const intuition = this.getAttributeTotalValue(Attribute.Intuition);

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
            this.setAttributeAsExceptional(Attribute.Body);
        }

        if(qualityReference.name === "lucky") {
            this.setAttributeAsExceptional(Attribute.Edge);
        }

        this.characterData.qualities.positive.push(qualityReference);
    }

    removePositiveQualityReference(quality: QualityReference): void {
        if(quality.name === "exceptional attribute") {
            this.resetAttributeExceptionalStatus();
        }

        if(quality.name === "lucky") {
            this.characterData.attributes[Attribute.Edge].exceptional = false;
        }

        const index = this.characterData.qualities.positive.findIndex(q => q.id === quality.id);
        this.characterData.qualities.positive.splice(index, 1);
    }

    updatePositiveQualityReference(qualityReference: QualityReference): void {
        const index = this.positiveQualities.findIndex(q => q.id === qualityReference.id);

        if(qualityReference.name === "exceptional attribute" && qualityReference.attribute) {
            this.resetAttributeExceptionalStatus();
            this.setAttributeAsExceptional(qualityReference.attribute);
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