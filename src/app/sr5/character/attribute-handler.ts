import { ShadowRun5ECharacterData, AttributesData } from './interfaces/character.interface';
import { AttributeName, MagicAttributeName } from './interfaces/attribute.interface';
import { MetaType } from './interfaces/meta-type.interface';

import { metaTypeAttributesTable } from "./tables/meta-type-attributes.table";

export default class AttributeHandler {
    private metaType: MetaType;
    private exceptionalAttribute: AttributeName | MagicAttributeName | undefined;
    private attributesData: AttributesData;

    constructor(characterData: ShadowRun5ECharacterData) {
        this.metaType = characterData.metaType;
        this.exceptionalAttribute = characterData.exceptionalAttribute;
        this.attributesData = characterData.attributes;
    }

    getAttributes(): AttributesData {
        return this.attributesData
    }

    setAttributes(attributes: AttributesData) {
        this.attributesData = attributes;
    }

    setExceptionalAttribute(attribute: AttributeName | undefined) {
        this.exceptionalAttribute = attribute;
    }

    getAttributeBaseValue(attributeName: AttributeName): number {
        const metaTypeAttributesTableRow = metaTypeAttributesTable[this.metaType];
        return metaTypeAttributesTableRow.attributes[attributeName].base;
    }

    getAttributeBuildPoints(attributeName: AttributeName): number {
        return this.attributesData[attributeName].buildPoints;
    }

    getAttributeIncreases(attributeName: AttributeName): number {
        return this.attributesData[attributeName].increases;
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

    getAttributeBuildPointsTotal(): number {
        let total = 0;

        for(const attributeName in this.attributesData) {
            const key = attributeName as keyof typeof this.attributesData;

            if(attributeName !== AttributeName.Edge) {
                total += this.attributesData[key].buildPoints;
            }
        }

        return total;
    }

    getAttributeIncreasesTotal(): number {
        let total = 0;

        for(const attribute in this.attributesData) {
            const key = attribute as keyof typeof this.attributesData;

            if(attribute !== AttributeName.Edge) {
                total += this.attributesData[key].increases;
            }
        }

        return total;
    }

    getAttributeIncreaseCostTotal(): number {
        let total = 0;

        for(const attribute in this.attributesData) {
            const key = attribute as keyof typeof this.attributesData;

            if(attribute !== AttributeName.Edge) {
                total += this.getAttributeIncreaseCost(key as AttributeName);
            }
        }

        return total;
    }

    getAttributeIncreaseCost(attributeName: AttributeName): number {
        let totalIncreaseSpent = 0;
        const attr = this.getAttributes()[attributeName];

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

    isAttributeAboveMaximum(attributeName: AttributeName): boolean {
        const attributeTotalValue = this.getAttributeTotalValue(attributeName);
        const maximum = this.getAttributeMaxValue(attributeName);
        return attributeTotalValue > maximum;
    }

    isAttributeExceptional(attributeName: AttributeName): boolean {
        return this.exceptionalAttribute === attributeName;
    }
}