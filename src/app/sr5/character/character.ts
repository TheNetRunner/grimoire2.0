import { BasicData, ShadowRun5ECharacterData, PriorityData } from './interfaces/character.interface';

import { MetaType } from './interfaces/meta-type.interface';
import { SettingsData } from './interfaces/character.interface';
import { Quality, QualityReference } from './interfaces/quality.interface';

import PriorityTableProvider from './tables/priority-table-provider';

import AttributeManager from './attributes/attribute-manager';
import QualityManager from './quality/quality-manager';
import { AttributeName } from './interfaces/attribute.interface';
import { LevelOfPlayName } from './interfaces/settings.interface';
import { Priority } from './interfaces/priority.interface';
import { MagicUserType } from './interfaces/magic.interface';

export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    private priorityTableProvider: PriorityTableProvider;
    public attributeManager: AttributeManager;
    public qualityManager: QualityManager;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
        this.priorityTableProvider = new PriorityTableProvider();
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
        this.characterData.priorities = priorities;
    }

    handlePriorityChanges(priorities: PriorityData): void {
        if(priorities.metaType !== this.priorities.metaType) {
            this.handleMetaTypePriorityChange(priorities.metaType);
        }

        if(priorities.attributes !== this.priorities.attributes) {
            this.handleAttributePriorityChange(priorities.attributes);
        }

        this.priorities = priorities;
    }

    handleMetaTypePriorityChange(metaTypePriority: Priority): void {
        this.priorities = {...this.priorities, metaType: metaTypePriority}
        this.metaType = MetaType.Human;
        this.attributeManager.specialAttributePoints = this.priorityTableProvider.getSpecialAttributePoints(metaTypePriority, this.metaType);
    }

    handleAttributePriorityChange(attributePriority: Priority): void {
        this.priorities = {...this.priorities, attributes: attributePriority}
        this.attributeManager.attributePoints = this.priorityTableProvider.getAttributePoints(attributePriority);
        console.log(this.attributeManager.attributePoints);
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

    handleMetaTypeChange(metaType: MetaType): void {
        this.metaType = metaType;
        this.attributeManager.specialAttributePoints = this.priorityTableProvider.getSpecialAttributePoints(this.priorities.metaType, metaType);
    }

    // Magic

    get magicUserType(): MagicUserType {
        return this.characterData.magicUserType;
    }

    // Karma

    get totalKarmaSpent(): number {
        let total = 0;

        total += this.attributeManager.getAttributeIncreasesKarmaCostTotal();

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
        const totalReaction = this.attributeManager.getAttributeTotalValue(AttributeName.Reaction);
        const totalIntuition = this.attributeManager.getAttributeTotalValue(AttributeName.Intuition);

        return totalReaction + totalIntuition;
    }

    get mentalLimit(): number {
        const totalLogic = this.attributeManager.getAttributeTotalValue(AttributeName.Logic);
        const totalIntuition = this.attributeManager.getAttributeTotalValue(AttributeName.Intuition);
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower);

        return Math.ceil(((totalLogic * 2) + totalIntuition + totalWillpower ) / 3);
    }

    get physicalLimit(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body);
        const totalStrength = this.attributeManager.getAttributeTotalValue(AttributeName.Strength);
        const totalReaction = this.attributeManager.getAttributeTotalValue(AttributeName.Reaction);

        return Math.ceil(((totalStrength * 2) + totalBody + totalReaction ) / 3);
    }

    get socialLimit(): number {
        const totalCharisma = this.attributeManager.getAttributeTotalValue(AttributeName.Charisma);
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower);
        const totalEssence = this.characterData.essence;

        return Math.ceil(((totalCharisma * 2) + totalWillpower + totalEssence ) / 3);
    }

    get composure(): number {
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower);
        const totalCharisma = this.attributeManager.getAttributeTotalValue(AttributeName.Charisma);

        return totalWillpower + totalCharisma;
    }

    get judgeIntentions(): number {
        const totalIntuition = this.attributeManager.getAttributeTotalValue(AttributeName.Intuition);
        const totalCharisma = this.attributeManager.getAttributeTotalValue(AttributeName.Charisma);

        return totalIntuition + totalCharisma;
    }

    get memory(): number {
        const totalLogic = this.attributeManager.getAttributeTotalValue(AttributeName.Logic);
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower);

        return totalLogic + totalWillpower;
    }

    get liftAndCarry(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body);
        const totalStrength = this.attributeManager.getAttributeTotalValue(AttributeName.Strength);

        return totalBody + totalStrength;
    }

    get physicalMonitorBoxes(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body);

        return (totalBody / 2) + 8;
    }

    get stunMonitorBoxes(): number {
        const totalWillpower = this.attributeManager.getAttributeTotalValue(AttributeName.Willpower);

        return (totalWillpower / 2) + 8;
    }

    get overflowBoxes(): number {
        const totalBody = this.attributeManager.getAttributeTotalValue(AttributeName.Body);

        return totalBody;
    }

    // Save

    getSaveObject(): ShadowRun5ECharacterData {
        return this.characterData;
    }
}
