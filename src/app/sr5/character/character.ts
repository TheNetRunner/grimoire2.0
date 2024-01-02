import { BasicData, ShadowRun5ECharacterData, PriorityData } from './interfaces/character.interface';

import { MetaType } from './interfaces/meta-type.interface';
import { SettingsData } from './interfaces/character.interface';
import { Quality, QualityReference } from './interfaces/quality.interface';

import { priorityTable } from './tables/priority-table.data';

import AttributeManager from './attributes/attribute-manager';
import QualityManager from './quality/quality-manager';
import { AttributeName } from './interfaces/attribute.interface';
import { LevelOfPlayName } from './interfaces/settings.interface';


export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    public attributeManager: AttributeManager;
    public qualityManager: QualityManager;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
        this.attributeManager = new AttributeManager(characterData);
        this.qualityManager = new QualityManager(characterData);
    }

    get id() {
        return this.characterData.id;
    }

    get basic(): BasicData {
        return this.characterData.basic;
    }

    set basic(basicData: BasicData) {
        this.characterData.basic = basicData;
    }

    // Priorities

    get priorities(): PriorityData {
        return this.characterData.priorities;
    }

    set priorities(priorities: PriorityData) {
        if(priorities.metaType !== this.characterData.priorities.metaType) {
            this.handleMetaTypePriorityChange();
        }

        this.characterData.priorities = priorities;
    }

    handleMetaTypePriorityChange(): void {
        this.metaType = MetaType.Human;
    }

    get attributeBuildPoints(): number {
        const priorityTableRow = priorityTable[this.priorities.attributes];
        return priorityTableRow.attributePoints;
    }

    // Qualities

    addQuality(quality: Quality): void {
        if(quality.name === "exceptional attribute") {
            this.attributeManager.setExceptionalAttribute(AttributeName.Body);
        }

        if(quality.name === "lucky") {
            this.attributeManager.setLucky();
        }

        if(quality.type === "positive") {
            this.qualityManager.addPositiveQuality(quality);
        }

        if(quality.type === "negative") {
            this.qualityManager.addNegativeQuality(quality);
        }
    }

    updateQuality(qualityReferenceUpdate: QualityReference, qualityType: string): void {
        if(qualityReferenceUpdate.name === "exceptional attribute" && qualityReferenceUpdate.attribute) {
            this.attributeManager.setExceptionalAttribute(qualityReferenceUpdate.attribute);
        }

        if(qualityType === "positive") {
            this.qualityManager.updatePositiveQuality(qualityReferenceUpdate);
        }

        if(qualityType === "negative") {
            this.qualityManager.updateNegativeQuality(qualityReferenceUpdate);
        }
    }

    removeQuality(qualityReference: QualityReference): void {
        this.qualityManager.removeQuality(qualityReference.id);

        if(qualityReference.name === "exceptional attribute") {
            this.attributeManager.removeExceptionalAttribute();
        }

        if(qualityReference.name === "lucky") {
            this.attributeManager.removeLucky();
        }
    }

    // Meta Type

    get metaType(): MetaType {
        return this.characterData.metaType;
    }

    set metaType(metaType: MetaType) {
        this.characterData.metaType = metaType;
    }

    get imageName(): string {
        return this.characterData.imageName;
    }

    set imageName(imageName: string) {
        this.characterData.imageName = imageName;
    }

    getSpecialAttributePoints(): number | undefined {
        const priorityTableRow = priorityTable[this.priorities.metaType];
        const metaTypeOption = priorityTableRow.metaTypes.find(metaType => metaType.name === this.metaType);
        return metaTypeOption?.specialAttrPoints;
    }

    // Karma

    get totalKarmaSpent(): number {
        let total = 0;

        total += this.attributeManager.getAttributeIncreasesKarmaCostTotal(this.metaType);

        return total;
    }

    get startingKarma(): number {
        return this.characterData.startingKarma;
    }

    set startingKarma(karma: number) {
        this.characterData.startingKarma = karma;
    }

    get remainingStartingKarma(): number {
        return this.startingKarma
    }

    get startingKarmaSpend(): number {
        const totalQualitySpend = this.qualityManager.getTotalQualityKarmaCost();
        return totalQualitySpend;
    }

    // Settings

    get settings(): SettingsData {
        return this.characterData.settings;
    }

    set settings(settings: SettingsData) {
        this.characterData.settings = settings;
        this.handleLevelOfPlayChange();
    }

    set levelOfPlay(levelOfPlay: LevelOfPlayName) {
        this.characterData.settings.levelOfPlay = levelOfPlay;
        this.handleLevelOfPlayChange();
    }

    handleLevelOfPlayChange(): void {
        this.startingKarma = this.getStartingKarma(this.settings.levelOfPlay);
    }

    private getStartingKarma(LevelOfPlay: LevelOfPlayName): number {
        switch(LevelOfPlay) {
            case LevelOfPlayName.Street:
                return 13;
            case LevelOfPlayName.Normal:
                return 25;
            case LevelOfPlayName.Prime:
                return 35;
            default:
                return 0;
        }
    }

    // Final Calculations

    get initiative(): number {
        const totalReaction = this.attributeManager.getAttributeTotalValue(AttributeName.Reaction, this.metaType)
        const totalIntuition = this.attributeManager.getAttributeTotalValue(AttributeName.Intuition, this.metaType);

        return totalReaction + totalIntuition;
    }

    get mentalLimit(): number {
        const totalLogic = this.attributeManager.getAttributeTotalValue(AttributeName.Logic, this.metaType);
        const totalIntuition = this.attributeManager.getAttributeTotalValue(AttributeName.Intuition, this.metaType);
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower, this.metaType);

        return Math.ceil(((totalLogic * 2) + totalIntuition + totalWillpower ) / 3);
    }

    get physicalLimit(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body, this.metaType);
        const totalStrength = this.attributeManager.getAttributeTotalValue(AttributeName.Strength, this.metaType);
        const totalReaction = this.attributeManager.getAttributeTotalValue(AttributeName.Reaction, this.metaType);

        return Math.ceil(((totalStrength * 2) + totalBody + totalReaction ) / 3);
    }

    get socialLimit(): number {
        const totalCharisma = this.attributeManager.getAttributeTotalValue(AttributeName.Charisma, this.metaType);
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower, this.metaType);
        const totalEssence = this.characterData.essence;

        return Math.ceil(((totalCharisma * 2) + totalWillpower + totalEssence ) / 3);
    }

    get physicalMonitorBoxes(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body, this.metaType);

        return (totalBody / 2) + 8;
    }

    get stunMonitorBoxes(): number {
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower, this.metaType);

        return (totalWillpower / 2) + 8;
    }

    get overflowBoxes(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body, this.metaType);

        return totalBody;
    }

    // Save

    getSaveObject(): ShadowRun5ECharacterData {
        const saveObject: ShadowRun5ECharacterData = {
            ...this.characterData,
            exceptionalAttributes: this.attributeManager.exceptionalAttributes,
            attributes: this.attributeManager.attributes,
            qualities: this.qualityManager.qualityReferences
        }

        return saveObject;
    }
}
