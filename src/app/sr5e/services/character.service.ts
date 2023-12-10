import { Injectable } from '@angular/core';

import { ShadowRun5ECharacter } from '../models/character.inteface';
import { priorityTable } from '../data/priorityTable';
import { PriorityTable } from "../models/priority-tables.interface";
import { metaTypeAttributesTable } from "../data/meta-type-attribute-table";
import { AttributeMinMax } from '../models/meta-type-attribute-table.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    private priorityTable: PriorityTable = priorityTable;
    private metaTypeAttributesTable = metaTypeAttributesTable;

    getTotalBuildPointsSpent(character: ShadowRun5ECharacter): number {
        let total = 0;

        for (const attribute in character.attributes) {
            if (character.attributes.hasOwnProperty(attribute)) {
                const key = attribute as keyof typeof character.attributes;
                total = total + character.attributes[key].buildPoints;
            }
        }

        return total;
    }

    getMaxBuildPoints(character: ShadowRun5ECharacter): number {
        const characterAttributePriority = character.priorities.attributes;
        const key = characterAttributePriority as keyof PriorityTable;

        const maxBuildPoints = this.priorityTable[key].attributes;

        return maxBuildPoints;
    }

    calculateAttributeIncreasesCost(character: ShadowRun5ECharacter, attributeName: string): void {


    }

    calculateAttributeMinAndMax(character: ShadowRun5ECharacter, attributeName: string): number[] {
        let attrMinAndMax: number[] = [];
        
        const characterMetaType = character.metaType;
        const metaTypeTableRow = this.metaTypeAttributesTable[characterMetaType];

        // @ts-ignore
        attrMinAndMax.push(metaTypeTableRow[attributeName].minimum);

        // @ts-ignore
        attrMinAndMax.push(metaTypeTableRow[attributeName].maximum);

		// if (character.qualities.exceptionalAttribute === attributeName) {
		// 	attrMinAndMax[1] += 1;
		// }

		return attrMinAndMax;
	}

    calculateAttributeTotalValue(character: ShadowRun5ECharacter, attributeName: string): number {
        const startingValue = this.calculateAttributeMinAndMax(character, attributeName)[0];
		// @ts-ignore
		const buildPoints = character.attributes[attributeName].buildPoints;
		// @ts-ignore
		const increases = character.attributes[attributeName].increases;

		return startingValue + buildPoints + increases;
    }

    calculateAttributeIncreasesSpent(character: ShadowRun5ECharacter, attributeName: string): number {
        let total = 0;

        const attributeStartingValue = this.calculateAttributeMinAndMax(character, attributeName)[0];
        // @ts-ignore
        const attributeBuildPoints = character.attributes[attributeName].buildPoints;
        const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;
        // @ts-ignore
        const attributeIncreases = character.attributes[attributeName].increases;
        
        for(let i = 1; i <= attributeIncreases; i++) {
            const newRating = attributeValueBeforeIncreases + i;
            total = total + (newRating * 5);
            if(attributeName === 'body') {
                console.log(attributeValueBeforeIncreases, newRating, i, total);
            }
        }

        return total;

    }

    calculateTotalIncreasesSpent(character: ShadowRun5ECharacter): number {
        let total = 0;

        for(const attributeName in character.attributes) {
            total = total + this.calculateAttributeIncreasesSpent(character, attributeName);
        }

        return total;
    }
} 
