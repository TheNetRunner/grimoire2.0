import { Injectable } from '@angular/core';

import { ShadowRun5ECharacter } from '../models/character.model';
import { AttributeName, AttributesTableRow } from '../models/attribute.model';
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

    calculateAttributeIncreasesCost(character: ShadowRun5ECharacter, attributeName: string): void {


    }

    calculateAttributeTotalValue(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
        const startingValue = this.calculateAttributeMinAndMax(character, attributeName)[0];
		const buildPoints = character.attributes[attributeName].buildPoints;
		const increases = character.attributes[attributeName].increases;

		return startingValue + buildPoints + increases;
    }

    calculateTotalIncreasesSpent(character: ShadowRun5ECharacter): number {
        let totalIncreaseSpent = 0;

        for(const attributeName in character.attributes) {
            if (character.attributes.hasOwnProperty(attributeName)) {
                totalIncreaseSpent += this.calculateAttributeIncreasesSpent(character, attributeName as AttributeName);
            }
        }

        return totalIncreaseSpent;
    }

    private calculateAttributeIncreasesSpent(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
        let total = 0;

        const attributeStartingValue = this.calculateAttributeMinAndMax(character, attributeName)[0];
        const attributeBuildPoints = character.attributes[attributeName].buildPoints;
        const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;
        const attributeIncreases = character.attributes[attributeName].increases;
        
        for(let i = 1; i <= attributeIncreases; i++) {
            const newRating = attributeValueBeforeIncreases + i;
            total = total + (newRating * 5);
        }

        return total;

    }

    calculateAttributeMinAndMax(character: ShadowRun5ECharacter, attributeName: AttributeName): number[] {
        let attrMinAndMax: number[] = [];

        const attributesTableRow = this.getAttributeTableRow(character.metaType);

        if(attributesTableRow) {
            attrMinAndMax.push(attributesTableRow.attributes[attributeName].minimum);
            attrMinAndMax.push(attributesTableRow.attributes[attributeName].maximum);
        }

		// if (character.qualities.exceptionalAttribute === attributeName) {
		// 	attrMinAndMax[1] += 1;
		// }

		return attrMinAndMax;
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
} 
