import { Injectable } from '@angular/core';

import { ShadowRun5ECharacter } from '../models/character.model';
import { Attribute, AttributeName, AttributesTableRow, SpecialAttributeName } from '../models/attribute.model';
import { MetaTypeName } from '../models/meta-types.model';
import { MagicUserType } from '../models/magic.model';

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
                totalIncreaseSpent += this.calAttributeIncreasesCost(character, attributeName as AttributeName);
            }
        }

        return totalIncreaseSpent;
    }

    calTotalSpecialAttributeIncreasesCost(character: ShadowRun5ECharacter): number {
        let totalIncreaseSpent = 0;

        for(const attributeName in character.specialAttributes) {
            if (character.specialAttributes.hasOwnProperty(attributeName)) {
                totalIncreaseSpent += this.calAttributeIncreasesCost(character, attributeName as SpecialAttributeName);
            }
        }

        return totalIncreaseSpent;
    }

    private calAttributeIncreasesCost(
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

    calEssence(character: ShadowRun5ECharacter): number {
        return 6;
    }

    calInitativeAttribute(character: ShadowRun5ECharacter): number {
        const reaction = this.calAttributeTotalValue(character, AttributeName.Reaction);
        const intuition = this.calAttributeTotalValue(character, AttributeName.Intuition);

        return reaction + intuition;
    }

    calPhysicalLimit(character: ShadowRun5ECharacter): number {
        let limit = 0;

        const strength = this.calAttributeTotalValue(character, AttributeName.Strength);
        const body = this.calAttributeTotalValue(character, AttributeName.Body);
        const reaction = this.calAttributeTotalValue(character, AttributeName.Reaction);

        limit = Math.ceil(((strength * 2) + body + reaction) / 3);

        return limit;
    }

    calMentalLimit(character: ShadowRun5ECharacter): number {
        let limit = 0;

        const logic = this.calAttributeTotalValue(character, AttributeName.Logic);
        const willPower = this.calAttributeTotalValue(character, AttributeName.WillPower);
        const intuition = this.calAttributeTotalValue(character, AttributeName.Intuition);

        limit = Math.ceil(((logic * 2) + willPower + intuition) / 3);

        return limit;
    }

    calSocialLimit(character: ShadowRun5ECharacter): number {
        let limit = 0;

        const charisma = this.calAttributeTotalValue(character, AttributeName.Charisma);
        const willPower = this.calAttributeTotalValue(character, AttributeName.WillPower);
        const essence = this.calEssence(character);

        limit = Math.ceil(((charisma * 2) + willPower + essence) / 3);

        return limit;
    }

    calPhysicalConditionMonitor(character: ShadowRun5ECharacter): number {
        let limit = 0;
        const body = this.calAttributeTotalValue(character, AttributeName.Body);

        limit = (body / 2) + 8;

        return limit;
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

    getTotalMagicalBuildPointsSpent(character: ShadowRun5ECharacter): number {
        let total = 0;

        if(character.magicUserType && character.magicUserType !== MagicUserType.Technomancer) {
            total = character.magic.attribute.buildPoints;
        }

        if(character.magicUserType && character.magicUserType === MagicUserType.Technomancer) {
            total = character.resonance.attribute.buildPoints;
        }

        return total;
    }

    getTotalMagicalIncreases(character: ShadowRun5ECharacter): number {
        let total = 0;

        if(character.magicUserType && character.magicUserType !== MagicUserType.Technomancer) {
            total = character.magic.attribute.buildPoints;
        }

        if(character.magicUserType && character.magicUserType === MagicUserType.Technomancer) {
            total = character.resonance.attribute.buildPoints;
        }

        return total;
    }

    getMagicalAttributeTotal(character: ShadowRun5ECharacter): number {
        let total = 0;

        if(character.magicUserType && character.magicUserType !== MagicUserType.Technomancer) {
            total = character.magic.attribute.buildPoints + character.magic.attribute.increases;
        }

        if(character.magicUserType && character.magicUserType === MagicUserType.Technomancer) {
            total = character.resonance.attribute.buildPoints + character.resonance.attribute.increases;
        }

        return total;
    }
} 
