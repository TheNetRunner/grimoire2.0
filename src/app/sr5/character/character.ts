import { BasicData, ShadowRun5ECharacterData, PriorityData } from './interfaces/character.interface';

import { MetaType } from './interfaces/meta-type.interface';
import { SettingsData } from './interfaces/character.interface';
import { Quality, QualityReference } from './interfaces/quality.interface';

import { priorityTable } from './tables/priority-table.data';

import AttributeHandler from './attributes/attribute-handler';
import QualityHandler from './quality/quality-handler';
import { AttributeName } from './interfaces/attribute.interface';


export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    public attributeHandler: AttributeHandler;
    public qualityHandler: QualityHandler;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
        this.attributeHandler = new AttributeHandler(characterData);
        this.qualityHandler = new QualityHandler(characterData);
    }

    get id() {
        return this.characterData.id;
    }

    get basic() {
        return this.characterData.basic;
    }

    set basic(basicData: BasicData) {
        this.characterData.basic = basicData;
    }

    // Priorities
    get priorities() {
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

    // Qualities
    addQuality(quality: Quality): void {
        if(quality.type === "positive") {
            this.qualityHandler.addPositiveQuality(quality);
        }

        if(quality.type === "negative") {
            this.qualityHandler.addNegativeQuality(quality);
        }

        if(quality.name === "exceptional attribute") {
            this.attributeHandler.setExceptionalAttribute(AttributeName.Body);
        }
    }

    updateQuality(qualityReferenceUpdate: QualityReference, qualityType: string): void {
        if(qualityType === "positive") {
            this.qualityHandler.updatePositiveQuality(qualityReferenceUpdate);
        }

        if(qualityType === "negative") {
            this.qualityHandler.updateNegativeQuality(qualityReferenceUpdate);
        }

        if(qualityReferenceUpdate.name === "exceptional attribute") {
            this.attributeHandler.setExceptionalAttribute(qualityReferenceUpdate.attribute);
        }
    }

    removeQuality(qualityReference: QualityReference): void {
        this.qualityHandler.removeQuality(qualityReference.id);

        if(qualityReference.name === "exceptional attribute") {
            this.attributeHandler.setExceptionalAttribute(undefined);
        }
    }

    // Meta Type
    get metaType() {
        return this.characterData.metaType;
    }

    set metaType(metaType: MetaType) {
        this.characterData.metaType = metaType;
    }

    get imageName() {
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

    // Settings
    get settings() {
        return this.characterData.settings;
    }

    set settings(settings: SettingsData) {
        this.characterData.settings = settings;
    }

    // Save
    getSaveObject(): ShadowRun5ECharacterData {
        const saveObject: ShadowRun5ECharacterData = {
            ...this.characterData,
            exceptionalAttribute: this.attributeHandler.getExceptionalAttribute(),
            attributes: this.attributeHandler.getAttributes(),
            qualities: this.qualityHandler.qualityReferences
        }

        return saveObject;
    }
}
