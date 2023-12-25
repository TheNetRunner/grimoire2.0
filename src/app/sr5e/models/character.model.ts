import { v4 as uuidv4 } from 'uuid';

import { ShadowRun5ECharacterData, BasicInformation } from './character.interface';
import { Attribute } from './attribute.interface';
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

    get essence(): number {
        return this.characterData.essence;
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

    setAttributeAsExceptional(attribute: Attribute): void {
        this.resetAttributeExceptionalStatus();
        this.characterData.attributes[attribute].exceptional = true;
    }

    resetAttributeExceptionalStatus(): void {
        for(const attribute in this.characterData.attributes) {
            const key = attribute as keyof typeof this.characterData.attributes;
            this.characterData.attributes[key].exceptional = false;
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

    // Quality

    get positiveQualities(): typeof this.characterData.qualities.positive {
        return this.characterData.qualities.positive;
    }

    addPositiveQualityReference(qualityName: string, maxRating: number, karmaCost: number): void {
        const qualityReference = this.createNewQualityReference(qualityName, maxRating, karmaCost);

        if(qualityReference.name === "exceptional attribute") {
            this.setAttributeAsExceptional(Attribute.Body);
        }

        this.characterData.qualities.positive.push(qualityReference);
    }

    removePositiveQualityReference(qualityName: string): void {
        if(qualityName === "exceptional attribute") {
            this.resetAttributeExceptionalStatus();
        }

        const index = this.characterData.qualities.positive.findIndex(q => q.name === qualityName);
        this.characterData.qualities.positive.splice(index, 1);
    }

    updatePositiveQualityReferenceRatingValue(qualityId: string, newRatingValue: number): void {
        const qualityReference = this.positiveQualities.find(q => q.id === qualityId);

        if(qualityReference) {
            qualityReference.ratingValue = newRatingValue;
        }
    }

    get negativeQualities(): typeof this.characterData.qualities.negative {
        return this.characterData.qualities.negative;
    }

    addNegativeQualityReference(qualityName: string, maxRating: number, karmaCost: number): void {
        const qualityReference = this.createNewQualityReference(qualityName, maxRating, karmaCost);
        this.negativeQualities.push(qualityReference);
    }

    removeNegativeQualityReference(qualityName: string): void {
        const index = this.negativeQualities.findIndex(q => q.name === qualityName);
        this.characterData.qualities.negative.splice(index, 1);
    }

    updateNegativeQualityReferenceRatingValue(qualityId: string, newRatingValue: number): void {
        const qualityReference = this.negativeQualities.find(q => q.id === qualityId);

        if(qualityReference) {
            qualityReference.ratingValue = newRatingValue;
        }
    }

    createNewQualityReference(qualityName: string, maxRating: number, karmaCost: number): QualityReference {
        return {
            id: this.generateQualityId(),
            name: qualityName,
            ratingValue: 1,
            maxRating,
            karmaCost,
            karmaTotal() { return this.karmaCost * this.ratingValue },
            optionSelection: ""
        };
    }

    getQualityReferenceKarmaCost(qualityReferenceName: string): number {
        let cost = 0;
        const qualityReference = this.getQualityReferenceByName(qualityReferenceName);

        if(qualityReference) {
            cost = qualityReference.karmaTotal();
        }

        return cost;
    }

    getQualityReferenceByName(qualityName: string): QualityReference | undefined {
        const allQualities = [...this.positiveQualities, ...this.negativeQualities];

        return allQualities.find(q => q.name === qualityName);
    }

    private generateQualityId(): string {
        let id: string;

        do {
            id = uuidv4().substring(0, 8);
        } while(!this.isIdUnique(id));

        return id;
    }

    private isIdUnique(id: string): boolean {
        return !this.positiveQualities.find(q => q.id === id) &&
            !this.negativeQualities.find(q => q.id === id);
    }

    // Magic

    get magic(): typeof this.characterData.magic {
        return this.characterData.magic;
    }

    get magicUserType(): MagicUserType {
        return this.characterData.magic.magicUserType;
    }

    // Karma

    get karmaPoints(): number {
        return this.characterData.karmaPoints;
    }

    set karmaPoints(karmaPoints: number) {
        this.characterData.karmaPoints = karmaPoints;
    }

    get QualityKarmaSpend(): number {
        let spend = 0;

        for(const quality of this.characterData.qualities.positive) {
            spend -= quality.karmaTotal();
        }

        for(const quality of this.characterData.qualities.negative) {
            spend += quality.karmaTotal();
        }

        return spend;
    }

    get startingKarma(): number { 
        switch(this.characterData.settings.levelOfPlay) {
            case LevelOfPlay.Prime:
                return 35;
            case LevelOfPlay.Street:
                return 13;
            default:
                return 25;
        }
    }

    get remainingStartingKarama(): number {
        return this.startingKarma - this.QualityKarmaSpend;
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