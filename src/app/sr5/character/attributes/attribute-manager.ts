import { MetaType } from "../interfaces/meta-type.interface";
import { AttributeName, MagicAttributeName } from "../interfaces/attribute.interface";
import { 
    AttributesData, 
    AttributeData, 
    ShadowRun5ECharacterData, 
    ExceptionalAttributesData 
} from "../interfaces/character.interface";

import { metaTypeAttributesTable } from "../tables/meta-type-attributes.table";

export default class AttributeManager {
    private exceptionalAttributesData: ExceptionalAttributesData[] = [];
    private attributesData: AttributesData;

    constructor(characterData: ShadowRun5ECharacterData) {
        this.exceptionalAttributes = characterData.exceptionalAttributes;
        this.attributesData = characterData.attributes;
    }

    get attributes(): AttributesData {
        return this.attributesData
    }

    set attributes(attributes: AttributesData) {
        this.attributesData = attributes;
    }

    get exceptionalAttributes(): ExceptionalAttributesData[] {
        return this.exceptionalAttributesData;
    }

    set exceptionalAttributes(attributes: ExceptionalAttributesData[]) {
        this.exceptionalAttributesData = attributes;
    }

    getAttributeBaseValue(attributeName: AttributeName, metaType: MetaType): number {
        const metaTypeAttributesTableRow = metaTypeAttributesTable[metaType];
        return metaTypeAttributesTableRow.attributes[attributeName].base;
    }

    getAttributeBuildPoints(attributeName: AttributeName): number {
        return this.attributesData[attributeName].buildPoints;
    }

    getAttributeIncreases(attributeName: AttributeName): number {
        return this.attributesData[attributeName].increases;
    }

    getAttributeMaxValue(attribute: AttributeName, metaType: MetaType): number {
        const metaTypeAttributesTableRow = metaTypeAttributesTable[metaType];
        let maxValue = metaTypeAttributesTableRow.attributes[attribute].max;

        if(this.isAttributeExceptional(attribute)) {
            maxValue += 1;
        }

        return maxValue;
    }

    getAttributeTotalValue(attributeName: AttributeName, metaType: MetaType): number {
        const minimumValue = this.getAttributeBaseValue(attributeName, metaType);
        const buildPoints = this.getAttributeBuildPoints(attributeName);
        const increases = this.getAttributeIncreases(attributeName);

        return minimumValue + buildPoints + increases;
    }

    get attributeBuildPointsTotal(): number {
        let total = 0;

        for(const attributeName in this.attributesData) {
            const key = attributeName as keyof typeof this.attributesData;

            if(attributeName !== AttributeName.Edge) {
                total += this.attributesData[key].buildPoints;
            }
        }

        return total;
    }

    get attributeIncreasesTotal(): number {
        let total = 0;

        for(const attribute in this.attributesData) {
            const key = attribute as keyof typeof this.attributesData;

            if(attribute !== AttributeName.Edge) {
                total += this.attributesData[key].increases;
            }
        }

        return total;
    }

    getAttributeIncreasesKarmaCostTotal(metaType: MetaType): number {
        let total = 0;

        for(const attribute in this.attributesData) {
            const key = attribute as keyof typeof this.attributesData;

            if(attribute !== AttributeName.Edge) {
                total += this.getAttributeIncreaseCost(key as AttributeName, metaType);
            }
        }

        return total;
    }

    getAttributeIncreaseCost(attributeName: AttributeName, metaType: MetaType): number {
        let totalIncreaseSpent = 0;
        const attr = this.attributes[attributeName];

        const attributeStartingValue = this.getAttributeBaseValue(attributeName, metaType);
        const attributeBuildPoints = this.getAttributeBuildPoints(attributeName);
        const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;

        for(let i = 1; i <= attr.increases; i++) {
            // The calculation is the (new rating * 5) CRB:107
            const newRating = attributeValueBeforeIncreases + i;
            totalIncreaseSpent = totalIncreaseSpent + (newRating * 5);
        }

        return totalIncreaseSpent;
    }

    isAttributeTotalAboveMaximum(attributeName: AttributeName, metaType: MetaType): boolean {
        const attributeTotalValue = this.getAttributeTotalValue(attributeName, metaType);
        const maximum = this.getAttributeMaxValue(attributeName, metaType);
        return attributeTotalValue > maximum;
    }

        setExceptionalAttribute(attributeName: AttributeName | MagicAttributeName): void {
        this.removeExceptionalAttribute();
        this.exceptionalAttributes.push(attributeName);
    }

    removeExceptionalAttribute(): void {
        for(let i = 0; i < this.exceptionalAttributes.length; i++) {
            if(this.exceptionalAttributes[i] !== AttributeName.Edge) {
                this.exceptionalAttributes.splice(i, 1);
            }
        }
    }

    setLucky(): void {
        this.exceptionalAttributes.push(AttributeName.Edge);
    }

    removeLucky(): void {
        const index = this.exceptionalAttributes.indexOf(AttributeName.Edge);
        this.exceptionalAttributes.splice(index, 1);
    }

    isAttributeExceptional(attributeName: AttributeName): boolean {
        return this.exceptionalAttributes.includes(attributeName);
    }
}