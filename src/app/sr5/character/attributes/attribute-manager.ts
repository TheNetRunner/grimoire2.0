import { MetaType } from "../interfaces/meta-type.interface";
import { AttributeName, SpecialAttributeName } from "../interfaces/attribute.interface";
import { 
    AttributesData,
    SpecialAttributesData, 
    ShadowRun5ECharacterData, 
    ExceptionalAttributesData 
} from "../interfaces/character.interface";

import { metaTypeAttributesTable } from "../tables/meta-type-attributes.table";
import PriorityTableProvider from "../tables/priority-table-provider";
import { Priority } from "../interfaces/priority.interface";
import { MagicUserType } from "../interfaces/magic.interface";

export default class AttributeManager {
    private characterData: ShadowRun5ECharacterData;
    private priorityTableProvider: PriorityTableProvider;

    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
        this.priorityTableProvider = new PriorityTableProvider();
    }

    get attributes(): AttributesData['attributes'] {
        return this.characterData.attributesData.attributes;
    }

    set attributes(attributes: AttributesData['attributes']) {
        this.characterData.attributesData.attributes = attributes;
    }

    get attributePoints(): number {
        return this.characterData.attributesData.attributePoints;
    }

    set attributePoints(attributePoints: number) {
        this.characterData.attributesData.attributePoints = attributePoints;
    }

    get exceptionalAttributes(): ExceptionalAttributesData[] {
        return this.characterData.exceptionalAttributes;
    }

    set exceptionalAttributes(exceptionalAttributes: ExceptionalAttributesData[]) {
        this.exceptionalAttributes = exceptionalAttributes;
    }

    get metaType(): MetaType {
        return this.characterData.metaType;
    }

    get magicUserType(): MagicUserType {
        return this.characterData.magicUserType;
    }

    get magicPriority(): Priority {
        return this.characterData.priorities.magic;
    }

    getAttributeBaseValue(attributeName: AttributeName): number {
        const metaTypeAttributesTableRow = metaTypeAttributesTable[this.metaType];
        return metaTypeAttributesTableRow.attributes[attributeName].base;
    }

    getAttributeBuildPoints(attributeName: AttributeName): number {
        return this.attributes[attributeName].buildPoints;
    }

    getAttributeIncreases(attributeName: AttributeName): number {
        return this.attributes[attributeName].increases;
    }

    getAttributeMaxValue(attribute: AttributeName): number {
        const metaTypeAttributesTableRow = metaTypeAttributesTable[this.metaType];
        let maxValue = metaTypeAttributesTableRow.attributes[attribute].max;

        if(this.isAttributeExceptional(attribute)) {
            maxValue += 1;
        }

        return maxValue;
    }

    getAttributeTotalValue(attributeName: AttributeName): number {
        const minimumValue = this.getAttributeBaseValue(attributeName);
        const buildPoints = this.getAttributeBuildPoints(attributeName);
        const increases = this.getAttributeIncreases(attributeName);

        return minimumValue + buildPoints + increases;
    }

    get attributeBuildPointsTotal(): number {
        let total = 0;

        for(const attributeName in this.attributes) {
            const key = attributeName as keyof typeof this.attributes;
            total += this.attributes[key].buildPoints;
        }

        return total;
    }

    get attributeIncreasesTotal(): number {
        let total = 0;

        for(const attribute in this.attributes) {
            const key = attribute as keyof typeof this.attributes;
            total += this.attributes[key].increases;
        }

        return total;
    }

    getAttributeIncreasesKarmaCostTotal(): number {
        let total = 0;

        for(const attribute in this.attributes) {
            const key = attribute as keyof typeof this.attributes;
            total += this.getAttributeIncreaseCost(key as AttributeName);
        }

        return total;
    }

    getAttributeIncreaseCost(attributeName: AttributeName): number {
        let totalIncreaseSpent = 0;
        const attr = this.attributes[attributeName];

        const attributeStartingValue = this.getAttributeBaseValue(attributeName);
        const attributeBuildPoints = this.getAttributeBuildPoints(attributeName);
        const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;

        for(let i = 1; i <= attr.increases; i++) {
            // The calculation is the (new rating * 5) CRB:107
            const newRating = attributeValueBeforeIncreases + i;
            totalIncreaseSpent = totalIncreaseSpent + (newRating * 5);
        }

        return totalIncreaseSpent;
    }

    isAttributeTotalAboveMaximum(attributeName: AttributeName): boolean {
        const attributeTotalValue = this.getAttributeTotalValue(attributeName);
        const maximum = this.getAttributeMaxValue(attributeName);
        return attributeTotalValue > maximum;
    }

        setExceptionalAttribute(attributeName: AttributeName | SpecialAttributeName): void {
        this.removeExceptionalAttribute();
        this.exceptionalAttributes.push(attributeName);
    }

    removeExceptionalAttribute(): void {
        for(let i = 0; i < this.exceptionalAttributes.length; i++) {
            if(this.exceptionalAttributes[i] !== SpecialAttributeName.Edge) {
                this.exceptionalAttributes.splice(i, 1);
            }
        }
    }

    setLucky(): void {
        this.exceptionalAttributes.push(SpecialAttributeName.Edge);
    }

    removeLucky(): void {
        const index = this.exceptionalAttributes.indexOf(SpecialAttributeName.Edge);
        this.exceptionalAttributes.splice(index, 1);
    }

    isAttributeExceptional(attributeName: AttributeName): boolean {
        return this.exceptionalAttributes.includes(attributeName);
    }

    // Special Attributes

    get specialAttributes(): SpecialAttributesData['specialAttributes'] {
        return this.characterData.specialAttributesData.specialAttributes;
    }

    set specialAttributes(specialAttributes: SpecialAttributesData['specialAttributes']) {
        this.characterData.specialAttributesData.specialAttributes = specialAttributes;
    }

    get specialAttributePoints(): number {
        return this.characterData.specialAttributesData.specialAttributePoints;
    }

    set specialAttributePoints(specialAttributeBuildPoints: number) {
        this.characterData.specialAttributesData.specialAttributePoints = specialAttributeBuildPoints;
    }

    getSpecialAttributeBuildPoints(attributeName: SpecialAttributeName): number {
        return this.specialAttributes[attributeName].buildPoints;
    }

    getSpecialAttributeIncreases(attributeName: SpecialAttributeName): number {
        return this.specialAttributes[attributeName].increases;
    }

    getSpecialAttributeBaseValue(attributeName: SpecialAttributeName): number {

        let value = 0;

        if(attributeName === SpecialAttributeName.Edge) {
            const metaTypeAttributesTableRow = metaTypeAttributesTable[this.metaType];
            value = metaTypeAttributesTableRow.attributes[attributeName].base;
        }

        if(attributeName === SpecialAttributeName.Magic) {
            value = this.priorityTableProvider.getMagicBaseValue(this.magicPriority);
        }

        if(attributeName === SpecialAttributeName.Resonance) {
            value = this.priorityTableProvider.getResonanceBaseValue(this.magicPriority);
        }

        return value;
    }

    getSpecialAttributeMaxValue(attributeName: SpecialAttributeName): number {
        let maxValue = 0;

        if(attributeName === SpecialAttributeName.Edge) {
            const metaTypeAttributesTableRow = metaTypeAttributesTable[this.metaType];
            maxValue = metaTypeAttributesTableRow.attributes[attributeName].max;
        }

        if(attributeName === SpecialAttributeName.Magic) {
            maxValue = 6;
        }

        if(attributeName === SpecialAttributeName.Resonance) {
            maxValue = 6;
        }

        return maxValue;
    }

    getSpecialAttributeTotalValue(attributeName: SpecialAttributeName): number {
        const minimumValue = this.getSpecialAttributeBaseValue(attributeName);
        const buildPoints = this.getSpecialAttributeBuildPoints(attributeName);
        const increases = this.getSpecialAttributeIncreases(attributeName);

        return minimumValue + buildPoints + increases;
    }

    get specialAttributesBuildPointsTotal(): number {
        let total = 0;

        for(const attributeName in this.specialAttributes) {
            const key = attributeName as keyof typeof this.specialAttributes;
            total += this.specialAttributes[key].buildPoints;
        }

        return total;
    }

    isSpecialAttributeTotalAboveMaximum(attributeName: SpecialAttributeName): boolean {
        const attributeTotalValue = this.getSpecialAttributeTotalValue(attributeName);
        const maximum = this.getSpecialAttributeMaxValue(attributeName);
        return attributeTotalValue > maximum;
    }
}