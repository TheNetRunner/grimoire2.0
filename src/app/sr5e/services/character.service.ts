import { Injectable } from '@angular/core';

import { ShadowRun5ECharacter } from '../models/character.model';
import { Attribute, AttributeName, AttributesTableRow, SpecialAttributeName } from '../models/attribute.model';
import { MetaTypeName } from '../models/meta-types.model';

import { priorityTable } from '../data/priority-table';
import { attributesTable } from '../data/meta-type-attribute-table';
import { Priority, PriorityTableRow } from '../models/priority-table.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    private priorityTable = priorityTable;
    private attributesTable = attributesTable;


    getTotalBuildPointsSpent(character: ShadowRun5ECharacter): number {
        let totalBuildPoints = 0;

        for (const attributeName in character.attributes) {
            if (character.attributes.hasOwnProperty(attributeName)) {
                const attribute = character.attributes[attributeName as keyof typeof character.attributes];

                totalBuildPoints = totalBuildPoints + attribute.buildPoints;
            }
        }

        return totalBuildPoints;
    }

    getMaxBuildPoints(character: ShadowRun5ECharacter): number {
        const characterAttributePriority = character.priorities.attributes;
        const maxBuildPoints = this.getPriorityRow(characterAttributePriority)?.attributePoints || 0;

        return maxBuildPoints;
    }

    getTotalSpecialBuildPointsSpent(character: ShadowRun5ECharacter): number {
        let totalSpecialBuildPoints = 0;

        for (const specialAttributeName in character.specialAttributes) {
            if (character.specialAttributes.hasOwnProperty(specialAttributeName)) {
                const specialAttribute = character.specialAttributes[specialAttributeName as keyof typeof character.specialAttributes];

                totalSpecialBuildPoints = totalSpecialBuildPoints + specialAttribute.buildPoints;
            }
        }

        return totalSpecialBuildPoints;
    }

    getMaxSpecialBuildPoints(character: ShadowRun5ECharacter): number {
        let specialBuildPoints = 0;
        const characterMetaTypePriority = character.priorities.metaType;
        const priorityTableRow = this.getPriorityRow(characterMetaTypePriority);

        if (priorityTableRow) {
            for(const metaType of priorityTableRow.metaTypes) {
                if(metaType.name === character.metaType) {
                    specialBuildPoints = metaType.specialAttrPoints;
                }
            }
        }

        return specialBuildPoints;

    }

    calAttributeTotalValue(character: ShadowRun5ECharacter, attributeName: AttributeName | SpecialAttributeName): number {
        const attribute = this.getCharacterAttributeByName(character, attributeName);

        const startingValue = this.calAttributeMinAndMax(character, attributeName)[0];
		const buildPoints = attribute.buildPoints;
		const increases = attribute.increases;

		return startingValue + buildPoints + increases;
    }

    calTotalAttributeIncreasesCost(character: ShadowRun5ECharacter): number {
        let totalIncreaseSpent = 0;

        for(const attributeName in character.attributes) {
            if (character.attributes.hasOwnProperty(attributeName)) {
                totalIncreaseSpent += this.calculateAttributeIncreasesCost(character, attributeName as AttributeName);
            }
        }

        return totalIncreaseSpent;
    }

    calTotalSpecialAttributeIncreasesCost(character: ShadowRun5ECharacter): number {
        let totalIncreaseSpent = 0;

        for(const attributeName in character.specialAttributes) {
            if (character.specialAttributes.hasOwnProperty(attributeName)) {
                totalIncreaseSpent += this.calculateAttributeIncreasesCost(character, attributeName as SpecialAttributeName);
            }
        }

        return totalIncreaseSpent;
    }

    private calculateAttributeIncreasesCost(
        character: ShadowRun5ECharacter, attributeName: AttributeName | SpecialAttributeName): number {
        let total = 0;
        const attribute = this.getCharacterAttributeByName(character, attributeName);

        if (attribute) {
            const attributeStartingValue = this.calAttributeMinAndMax(character, attributeName)[0];
            const attributeBuildPoints = attribute.buildPoints;
            const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;
            const attributeIncreases = attribute.increases;
            
            for(let i = 1; i <= attributeIncreases; i++) {
                const newRating = attributeValueBeforeIncreases + i;
                total = total + (newRating * 5);
            }
        }
        return total;

    }

    calAttributeMinAndMax(character: ShadowRun5ECharacter, attributeName: AttributeName | SpecialAttributeName): number[] {
        let minAndMax: number[] = [0, 0];
        let attributeTableRow = this.getAttributeTableRow(character.metaType);

        if (attributeTableRow) {
            minAndMax = [
                attributeTableRow.attributes[attributeName].minimum,
                attributeTableRow.attributes[attributeName].maximum,
            ];
        }

        return minAndMax

		// if (character.qualities.exceptionalAttribute === attributeName) {
		// 	attrMinAndMax[1] += 1;
		// }
	}

    calInitativeAttribute(character: ShadowRun5ECharacter): number {
        const reaction = this.calAttributeTotalValue(character, AttributeName.Reaction);
        const intuition = this.calAttributeTotalValue(character, AttributeName.Intuition);

        return reaction + intuition;
    }

    getAttributeTableRow(metaTypeName: MetaTypeName): AttributesTableRow | undefined {
        for(const tableRow of this.attributesTable) {
            if(tableRow.metaTypeName === metaTypeName) {
                return tableRow;
            }
        }

        return undefined;
    }

    getPriorityRow(priority: Priority): PriorityTableRow | undefined {
        for(const priorityRow of this.priorityTable) {
            if(priorityRow.name === priority) {
                return priorityRow;
            }
        }

        return undefined;
    }

    private getCharacterAttributeByName(
        character: ShadowRun5ECharacter, attributeName: AttributeName | SpecialAttributeName): Attribute {
        let attribute: Attribute | undefined;

        if (attributeName === SpecialAttributeName.Edge) {
            attribute = character.specialAttributes[attributeName];
        } else {
            attribute = character.attributes[attributeName];
        }

        return attribute;
    }
} 