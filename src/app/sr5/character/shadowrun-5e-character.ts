import { BasicData, Shadowrun5ECharacterData } from './interfaces/shadowrun-5e-character-data.interface';

import { MetaTypeName } from './interfaces/meta-type.interface';
import { SettingsData } from './interfaces/shadowrun-5e-character-data.interface';
import { Quality, QualityReference } from './quality/quality.interface';

import PriorityTableProvider from './priorities/priority-table-provider';

import AttributeManager from './attributes/attribute-manager';
import QualityManager from './quality/quality-manager';
import MagicManager from './magic/magic-manager';

import { AttributeName } from './interfaces/attribute.interface';
import { LevelOfPlayName } from './interfaces/settings.interface';
import { MagicUserType } from './interfaces/magic.interface';

import PrioritiesManager from './priorities/priorities-manager';
import { PriorityName, Priority, PrioritiesData } from './priorities/priority.interface';


export class Shadowrun5ECharacter {
    private characterData: Shadowrun5ECharacterData;
    private priorityTableProvider: PriorityTableProvider;
    public attributeManager: AttributeManager;
    public qualityManager: QualityManager;
    public magicManager: MagicManager;
    private prioritiesManager: PrioritiesManager;
    
    constructor(characterData: Shadowrun5ECharacterData) {
        this.characterData = characterData;
        this.priorityTableProvider = new PriorityTableProvider();
        this.attributeManager = new AttributeManager(characterData);
        this.qualityManager = new QualityManager(characterData);
        this.magicManager = new MagicManager(characterData);
        this.prioritiesManager = new PrioritiesManager(characterData);
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

    get imageName(): string {
        return this.characterData.imageName;
    }

    set imageName(imageName: string) {
        this.characterData.imageName = imageName;
    }

    // Priorities

    get priorities(): PrioritiesData {
        return this.characterData.priorities;
    }

    set priorities(priorities: PrioritiesData) {
        this.setPriority(PriorityName.metaType, priorities.metaType);
        this.setPriority(PriorityName.attributes, priorities.attributes);
        this.setPriority(PriorityName.magic, priorities.magic);
        this.setPriority(PriorityName.skills, priorities.skills);
        this.setPriority(PriorityName.resources, priorities.resources);
    }

    private setPriority(priorityName: PriorityName, priority: Priority) {
        this.prioritiesManager.setPriority(priorityName, priority);
    }

    getStartingNuyen(): number {
        return this.prioritiesManager.startingNuyen;
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

    get metaType(): MetaTypeName {
        return this.characterData.metaType;
    }

    set metaType(metaType: MetaTypeName) {
        this.characterData.metaType = metaType;
        this.attributeManager.specialAttributePoints = this.priorityTableProvider.getSpecialAttributePoints(this.priorities.metaType, metaType);
    }

    // Magic

    get magicUserType(): MagicUserType {
        return this.characterData.magicData.magicUserType;
    }

    set magicUserType(magicUserType: MagicUserType) {
        this.characterData.magicData.magicUserType = magicUserType;
    }
    
    // Karma

    get totalKarmaSpent(): number {
        let total = 0;

        total += this.attributeManager.getAttributeIncreasesKarmaCostTotal();
        total += this.totalKarmaSpentOnPositiveQualities;

        total -= this.totalKarmaSpentOnNegativeQualities;

        return total;
    }

    get totalKarma(): number {
        let total = 0

        total += this.startingKarma;

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

    get totalKarmaSpentOnPositiveQualities(): number {
        return this.qualityManager.getTotalPositiveQualityKarmaCost();
    }

    get totalKarmaSpentOnNegativeQualities(): number {
        return this.qualityManager.getTotalNegativeQualityKarmaReward();
    }

    // Final Calculations

    get initiative(): number {
        const totalReaction = this.attributeManager.getAttributeTotalValue(AttributeName.Reaction);
        const totalIntuition = this.attributeManager.getAttributeTotalValue(AttributeName.Intuition);

        return totalReaction + totalIntuition;
    }

    get initiativeDice(): number {
        return 1;
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

    // Settings

    get settings(): SettingsData {
        return this.characterData.settingsData;
    }

    set settings(settings: SettingsData) {
        this.characterData.settingsData = settings;
        this.handleLevelOfPlayChange();
    }

    set levelOfPlay(levelOfPlay: LevelOfPlayName) {
        this.characterData.settingsData.levelOfPlay = levelOfPlay;
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

    // Save

    get saveObject(): Shadowrun5ECharacterData {
        return this.characterData;
    }
}
