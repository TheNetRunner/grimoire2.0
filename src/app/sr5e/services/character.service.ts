import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    // private dataStoreService = inject(DataStoreService);

    // // Atrributes
    
    // getAttributeBuildPoints(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
    //     let totalBuildPoints = 0;
    //     const attribute = this.getAttributeByName(character, attributeName);

    //     if (attribute) {
    //         totalBuildPoints = attribute.buildPoints;
    //     }

    //     return totalBuildPoints;
    // }

    // getAllAttributeBuildPoints(character: ShadowRun5ECharacter): number {
    //     let totalBuildPoints = 0;
    //     const attributes = this.getAllAttributes(character);

    //     for (const attribute in attributes) {
    //         totalBuildPoints = totalBuildPoints + attributes[attribute].buildPoints;
    //     }

    //     return totalBuildPoints;
    // }

    // getAttributeIncreases(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
    //     let totalIncreases = 0;
    //     const attribute = this.getAttributeByName(character, attributeName);

    //     if (attribute) {
    //         totalIncreases = attribute.increases;
    //     }

    //     return totalIncreases;
    // }

    // attributeTotalValue(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
    //     const minimumValue = this.getAttributeMinimumValue(character, attributeName);
    //     const buildPoints = this.getAttributeBuildPoints(character, attributeName);
    //     const increases = this.getAttributeIncreases(character, attributeName);

	// 	return minimumValue + buildPoints + increases;
    // }

    // allAttributeTotalIncreasesCost(character: ShadowRun5ECharacter): number {
    //     let totalIncreaseSpent = 0;

    //     for (const attributeName in character.attributes) {
    //         totalIncreaseSpent = totalIncreaseSpent + this.attributeTotalIncreasesCost(character, attributeName as AttributeName);
    //     }

    //     return totalIncreaseSpent;
    // }

    // attributeTotalIncreasesCost(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
    //     let totalIncreaseSpent = 0;
    //     const attribute = this.getAttributeByName(character, attributeName);

    //     if (attribute) {
    //         const attributeStartingValue = this.getAttributeMinimumValue(character, attributeName);
    //         const attributeBuildPoints = this.getAttributeBuildPoints(character, attributeName);
    //         const attributeValueBeforeIncreases = attributeStartingValue + attributeBuildPoints;

    //         const attributeIncreases = attribute.increases;
            
    //         for(let i = 1; i <= attributeIncreases; i++) {
    //             // The calculation is the (new rating * 5) CRB:107
    //             const newRating = attributeValueBeforeIncreases + i;
    //             totalIncreaseSpent = totalIncreaseSpent + (newRating * 5);
    //         }
    //     }

    //     return totalIncreaseSpent;
    // }

    // isAttributeValueValid(character: ShadowRun5ECharacter, attributeName: AttributeName): boolean {
    //     const attribute = this.getAttributeByName(character, attributeName);
    //     const attributeTotalValue = this.attributeTotalValue(character, attributeName);
    //     const attributeMaximumValue = this.getAttributeMaximumValue(character, attributeName);

    //     if (attribute && attributeTotalValue > attributeMaximumValue) {
    //         return true;
    //     }

    //     return false;
    // }

    // private getAllAttributes(character: ShadowRun5ECharacter): Attribute[] {
    //     let attributes: Attribute[] = [];

    //     for (const attributeName in character.attributes) {
    //         attributes.push(character.attributes[attributeName as keyof typeof character.attributes]);
    //     }

    //     return attributes;
    // }

    // private getAttributeByName(character: ShadowRun5ECharacter, attributeName: AttributeName): Attribute | undefined {
    //     let attribute = undefined;

    //     if (character.attributes[attributeName]) {
    //         attribute = character.attributes[attributeName];
    //     }
        
    //     return attribute;
    // }


    // isAttributeExceptional(character: ShadowRun5ECharacter, attributeName: AttributeName): boolean {
    //     const attribute = this.getAttributeByName(character, attributeName);
    //     let isExceptional = false;

    //     if(attribute) {
    //         isExceptional = attribute.exceptional;
    //     }
        
    //     return isExceptional;
    // }

    // removeExceptionalAttribute(character: ShadowRun5ECharacter): void {
    //     const characterAttributes = this.getAllAttributes(character);

    //     for(const attribute of characterAttributes) {
    //         attribute.exceptional = false;
    //     }

    //     const update = { attributes: characterAttributes };
        
    //     this.dataStoreService.updateCharacter(character.id, update);
    // }

    // setExceptionalAttribute(character: ShadowRun5ECharacter, attributeName: AttributeName): void {
    //     this.removeExceptionalAttribute(character);

    //     character.attributes[attributeName as keyof typeof character.attributes].exceptional = true;
    //     this.dataStoreService.updateCharacter(character.id, character);
    // }

    // setSpecialExceptionalAttribute(character: ShadowRun5ECharacter, attributeName: SpecialAttributeName): void {
    //     this.removeExceptionalAttribute(character);

    //     character.specialAttributes[attributeName as keyof typeof character.specialAttributes].exceptional = true;
    //     this.dataStoreService.updateCharacter(character.id, character);
    // }

    // getSpecialAttributeByName(character: ShadowRun5ECharacter, attributeName: SpecialAttributeName): Attribute | undefined {
    //     let attribute = undefined;

    //     if (character.specialAttributes[attributeName]) {
    //         attribute = character.specialAttributes[attributeName];
    //     }
        
    //     return attribute;
    // }

    // getExceptionalAttributeName(character: ShadowRun5ECharacter): AttributeName | SpecialAttributeName | undefined {
    //     let attributeName = undefined;

    //     for(const attrName in character.attributes) {
    //         const attribute = this.getAttributeByName(character, attrName as AttributeName);
    //         if(attribute?.exceptional) {
    //             attributeName = AttributeName[attrName as keyof typeof AttributeName]
    //         }
    //     }

    //     for(const attrName in character.specialAttributes) {
    //         const attribute = this.getSpecialAttributeByName(character, attrName as SpecialAttributeName);
    //         if(attribute?.exceptional) {
    //             attributeName = SpecialAttributeName[attrName as keyof typeof SpecialAttributeName]
    //         }
    //     }

    //     return attributeName;
    // }

    // // Attribute Table

    // getAttributeMinimumValue(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
    //     let startingValue = 0;

    //     const characterMetaType = character.metaType;
    //     const characterMetaTypeTableRow = this.getAttributeTableRow(characterMetaType);

    //     if (characterMetaTypeTableRow) {
    //         startingValue = characterMetaTypeTableRow.attributes[attributeName].minimum;
    //     }

    //     return startingValue;

    // }

    // getAttributeMaximumValue(character: ShadowRun5ECharacter, attributeName: AttributeName): number {
    //     let maximumValue = 5;

    //     const characterMetaType = character.metaType;
    //     const characterMetaTypeTableRow = this.getAttributeTableRow(characterMetaType);
    //     const exceptionalAttribute = this.isAttributeExceptional(character, attributeName);

    //     if (characterMetaTypeTableRow) {
    //         maximumValue = characterMetaTypeTableRow.attributes[attributeName].maximum;
    //     }
    //     if (exceptionalAttribute) {
    //         return maximumValue + 1;
    //     }

    //     return maximumValue;
    // }

    // getMetaTypeRecialAbility(character: ShadowRun5ECharacter): string {
    //     let racialAbility = '';

    //     const characterMetaType = character.metaType;
    //     const characterMetaTypeTableRow = this.getAttributeTableRow(characterMetaType);

    //     if (characterMetaTypeTableRow) {
    //         racialAbility = characterMetaTypeTableRow.racial;
    //     }

    //     return racialAbility;
    // }

    // private getAttributeTableRow(metaTypeName: MetaTypeName): MetaTypeAttributesTableRow | undefined {
    //     let tableRow = undefined;

    //     for (const tableRow of attributesTable) {
    //         if (tableRow.metaTypeName === metaTypeName) {
    //             return tableRow;
    //         }
    //     }

    //     return tableRow;
    // }

    // // Special Attributes

    // getSpecialAttributeBuildPoints(character: ShadowRun5ECharacter, attributeName: SpecialAttributeName): number {
    //     let totalBuildPoints = 0;
    //     const attribute = this.getSpecialAttribute(character, attributeName);

    //     if (attribute) {
    //         totalBuildPoints = attribute.buildPoints;
    //     }

    //     return totalBuildPoints;
    // }

    // getAllSpecialAttributeBuildPoints(character: ShadowRun5ECharacter): number {
    //     let totalBuildPoints = 0;
    //     const attributes = this.getAllSpecialAttributes(character);

    //     for (const attribute of attributes) {
    //         totalBuildPoints = totalBuildPoints + attribute.buildPoints;
    //     }

    //     return totalBuildPoints;
    // }

    // getSpecialAttributeIncreases(character: ShadowRun5ECharacter, specialAttributeName: SpecialAttributeName): number {
    //     let totalIncreases = 0;
    //     const attribute = this.getSpecialAttribute(character, specialAttributeName);

    //     if (attribute) {
    //         totalIncreases = character.specialAttributes[specialAttributeName as keyof typeof character.specialAttributes].increases;
    //     }

    //     return totalIncreases;
    // }

    // getSpecialAttributeMaximumValue(character: ShadowRun5ECharacter, specialAttributeName: SpecialAttributeName): number {
    //     let maximumValue = 6;

    //     if (specialAttributeName === SpecialAttributeName.Edge) {
    //         maximumValue = this.getEdgeMaximumValue(character);

    //         const doesCharacterHaveLucky = this.doesCharacterHaveQuality(character, "lucky");

    //         if(doesCharacterHaveLucky) {
    //             maximumValue = maximumValue + 1;
    //         }
    //     }

    //     return maximumValue;
    // }

    // private getEdgeMaximumValue(character: ShadowRun5ECharacter): number {
    //     let minimumValue = 6;

    //     if (character.metaType === MetaTypeName.human) {
    //         minimumValue = 7;
    //     }

    //     return minimumValue;
    // }

    // getSpecialAttributeMinimumValue(character: ShadowRun5ECharacter, specialAttributeName: SpecialAttributeName): number {
    //     let maximumValue = 1;

    //     if (specialAttributeName === SpecialAttributeName.Magic) {
            
    //     }

    //     return maximumValue;
    // }

    // isSpecialAttributeValueValid(character: ShadowRun5ECharacter, specialAttributeName: SpecialAttributeName): boolean {
    //     const attribute = this.getSpecialAttribute(character, specialAttributeName);
    //     const attributeTotalValue = this.specialAttributeTotalValue(character, specialAttributeName);
    //     const attributeMaximumValue = this.getSpecialAttributeMaximumValue(character, specialAttributeName);

    //     if (attribute && attributeTotalValue > attributeMaximumValue) {
    //         return true;
    //     }

    //     return false;
    // }

    // specialAttributeTotalValue(character: ShadowRun5ECharacter, specialAttributeName: SpecialAttributeName): number {
    //     const buildPoints = this.getSpecialAttributeBuildPoints(character, specialAttributeName);
    //     const increases = this.getSpecialAttributeIncreases(character, specialAttributeName);

    //     return buildPoints + increases;
    // }

    // private getAllSpecialAttributes(character: ShadowRun5ECharacter): Attribute[] {
    //     let attributes: Attribute[] = [];

    //     for (const attributeName in character.specialAttributes) {
    //         attributes.push(character.specialAttributes[attributeName as keyof typeof character.specialAttributes]);
    //     }

    //     return attributes;
    // }

    // private getSpecialAttribute(character: ShadowRun5ECharacter, attributeName: SpecialAttributeName): Attribute | undefined {
    //     let attribute = undefined;

    //     if (character.specialAttributes[attributeName as keyof typeof character.specialAttributes]) {
    //         attribute = character.specialAttributes[attributeName as keyof typeof character.specialAttributes];
    //     }

    //     return attribute;
    // }

    // // Essence
    // getEssence(character: ShadowRun5ECharacter): number {
    //     let essence = 6;
    //     return essence;
    // }

    // // Final Calculations CRB:101
    // initiative(character: ShadowRun5ECharacter): number {
    //     let initiative = 0;

    //     const reaction = this.attributeTotalValue(character, AttributeName.Reaction);
    //     const intuition = this.attributeTotalValue(character, AttributeName.Intuition);

    //     initiative = reaction + intuition;

    //     return initiative;
    // }

    // astralInitiative(character: ShadowRun5ECharacter): number {
    //     let initiative = 0;

    //     const intuition = this.attributeTotalValue(character, AttributeName.Intuition);

    //     initiative = intuition * 2;

    //     return initiative;
    // }

    // matrixARInitiative(character: ShadowRun5ECharacter): number {
    //     let initiative = 0;

    //     const intuition = this.attributeTotalValue(character, AttributeName.Intuition);
    //     const reaction = this.attributeTotalValue(character, AttributeName.Reaction);

    //     initiative = intuition + reaction;

    //     return initiative;
    // }
    
    // physicalLimit(character: ShadowRun5ECharacter): number {
    //     let limit = 0;

    //     const strength = this.attributeTotalValue(character, AttributeName.Strength);
    //     const body = this.attributeTotalValue(character, AttributeName.Body);
    //     const reaction = this.attributeTotalValue(character, AttributeName.Reaction);

    //     limit = Math.ceil(((strength * 2) + body + reaction) / 3);

    //     return limit;
    // }

    // mentalLimit(character: ShadowRun5ECharacter): number {
    //     let limit = 0;

    //     const logic = this.attributeTotalValue(character, AttributeName.Logic);
    //     const willPower = this.attributeTotalValue(character, AttributeName.WillPower);
    //     const intuition = this.attributeTotalValue(character, AttributeName.Intuition);

    //     limit = Math.ceil(((logic * 2) + willPower + intuition) / 3);

    //     return limit;
    // }

    // socialLimit(character: ShadowRun5ECharacter): number {
    //     let limit = 0;

    //     const charisma = this.attributeTotalValue(character, AttributeName.Charisma);
    //     const willPower = this.attributeTotalValue(character, AttributeName.Charisma);
    //     const essence = this.getEssence(character);

    //     limit = Math.ceil(((charisma * 2) + willPower + essence) / 3);

    //     return limit;
    // }

    // physicalConditionMonitor(character: ShadowRun5ECharacter): number {
    //     let limit = 0;
    //     const body = this.attributeTotalValue(character, AttributeName.Body);

    //     limit = (body / 2) + 8;

    //     return limit;
    // }

    // stunConditionMonitor(character: ShadowRun5ECharacter): number {
    //     let limit = 0;
    //     const willPower = this.attributeTotalValue(character, AttributeName.WillPower);

    //     limit = (willPower / 2) + 8;

    //     return limit;
    // }

    // conditionMonitorOverflow(character: ShadowRun5ECharacter): number {
    //     let limit = 0;
    //     const body = this.attributeTotalValue(character, AttributeName.Body);

    //     limit = body;

    //     return limit;
    // }

    // // Priorities Table

    // getPriorityAttributePoints(priority: Priority): number {
    //     const maxBuildPoints = this.getPriorityRow(priority)?.attributePoints || 0;

    //     return maxBuildPoints;
    // }

    // getPrioritySkillsPoints(priority: Priority): { skillPoints: number, skillGroupPoints: number } {
    //     let skillPoints = { skillPoints: 0, skillGroupPoints: 0 };

    //     const priorityTableRow = this.getPriorityRow(priority);

    //     if (priorityTableRow) {
    //         skillPoints = priorityTableRow.skills;
    //     }

    //     return skillPoints;
    // }

    // getPriorityResourceAmounts(priority: Priority): ResourceStartingValues | undefined {
    //     let resourceStartingValues: ResourceStartingValues | undefined;

    //     const priorityTableRow = this.getPriorityRow(priority);

    //     if (priorityTableRow) {
    //         resourceStartingValues = priorityTableRow.resourceStartingValues;
    //     }

    //     return resourceStartingValues;
    // }

    // getPriorityMetaTypes(priority: Priority): MetaTypeStartingValues[] {
    //     let metaTypes: MetaTypeStartingValues[] = [];

    //     const priorityTableRow = this.getPriorityRow(priority);

    //     if (priorityTableRow) {
    //         metaTypes = priorityTableRow.metaTypes;
    //     }

    //     return metaTypes;
    // }

    // getPriotityMetaTypeSpecialAttributePoints(character: ShadowRun5ECharacter): number {
    //     let specialAttributePoints = 0;

    //     const characterMetaTypePriority = character.priorities.metaType;
    //     const priorityTableRow = this.getPriorityRow(characterMetaTypePriority);

    //     if(priorityTableRow) {
    //         for(const metaType of priorityTableRow.metaTypes) {
    //             if(metaType.name === character.metaType) {
    //                 specialAttributePoints = metaType.specialAttrPoints;
    //             }
    //         }
    //     }

    //     return specialAttributePoints;

    // }

    // getPriorityMagicResonanceText(priority: Priority): MagicResonanceText[]{
    //     let magicResonanceText: MagicResonanceText[] = [];

    //     const priorityTableRow = this.getPriorityRow(priority);

    //     if (priorityTableRow) {
    //         magicResonanceText = priorityTableRow.magicResonanceText;
    //     }

    //     return magicResonanceText;
    // }

    // getCharacterPriorityAttributePoints(character: ShadowRun5ECharacter): number {
    //     const characterAttributePriority = character.priorities.attributes;
    //     const maxBuildPoints = this.getPriorityRow(characterAttributePriority)?.attributePoints || 0;

    //     return maxBuildPoints;
    // }

    // getCharacterPrioritySkillsPoints(character: ShadowRun5ECharacter): { skillPoints: number, skillGroupPoints: number } {
    //     let skillPoints = { skillPoints: 0, skillGroupPoints: 0 };

    //     const characterSkillsPriority = character.priorities.skills;
    //     const priorityTableRow = this.getPriorityRow(characterSkillsPriority);

    //     if (priorityTableRow) {
    //         skillPoints = priorityTableRow.skills;
    //     }

    //     return skillPoints;
    // }

    // getCharacterPriorityResourceAmount(character: ShadowRun5ECharacter): number {
    //     let resourceAmount = 0;

    //     const characterResourcesPriority = character.priorities.resources;
    //     const characterLevelOfPlay = character.levelOfPlay;
    //     const priorityTableRow = this.getPriorityRow(characterResourcesPriority);

    //     if (priorityTableRow) {
    //         resourceAmount = priorityTableRow.resourceStartingValues[characterLevelOfPlay];
    //     }

    //     return resourceAmount;
    // }

    // getCharacterPriorityMetaTypes(character: ShadowRun5ECharacter): MetaTypeStartingValues[] {
    //     let metaTypes: MetaTypeStartingValues[] = [];

    //     const characterMetaTypePriority = character.priorities.metaType;
    //     const priorityTableRow = this.getPriorityRow(characterMetaTypePriority);

    //     if (priorityTableRow) {
    //         metaTypes = priorityTableRow.metaTypes;
    //     }

    //     return metaTypes;
    // }

    // getCharacterPriotityMetaTypeSpecialAttributePoints(character: ShadowRun5ECharacter): number {
    //     let specialAttributePoints = 0;

    //     const characterMetaTypePriority = character.priorities.metaType;
    //     const priorityTableRow = this.getPriorityRow(characterMetaTypePriority);

    //     if(priorityTableRow) {
    //         for(const metaType of priorityTableRow.metaTypes) {
    //             if(metaType.name === character.metaType) {
    //                 specialAttributePoints = metaType.specialAttrPoints;
    //             }
    //         }
    //     }

    //     return specialAttributePoints;

    // }

    // getCharacterPriorityMagicResonanceStartingValues(character: ShadowRun5ECharacter): MagicalStartingValues | undefined {
    //     let startingValues: MagicalStartingValues | undefined;

    //     const characterMagicResonancePriority = character.priorities.magicResonance;
    //     const priorityTableRow = this.getPriorityRow(characterMagicResonancePriority);

    //     if (priorityTableRow) {
    //         startingValues = priorityTableRow.magicResonance[character.magicUserType as keyof typeof priorityTableRow.magicResonance];
    //     }

    //     return startingValues;
    // }

    // private getPriorityRow(priority: Priority): PriorityTableRow | undefined {
    //     return priorityTable.find((row) => row.name === priority);
    // }

    // // Skills

    // // Qualities
    // addPositiveQuality(character: ShadowRun5ECharacter, qualityName: string): void {
    //     const qualityReference: QualityReference = { name: qualityName };
    //     const qualityMaxRating = this.getQualityMaxRating(qualityName);

    //     if(qualityName === "exceptional attribute") {
    //         this.setExceptionalAttribute(character, AttributeName.Body);
    //     }

    //     if(qualityName === "home ground") {
    //         qualityReference.optionSelection = "astral acclimation";
    //     }

    //     if(qualityMaxRating > 1) {
    //         qualityReference.ratingValue = 1;
    //     }

    //     character.qualities.positive.push(qualityReference);

    //     this.dataStoreService.updateCharacter(character.id, character);
    // }

    // getUnselectedPositiveQualities(character: ShadowRun5ECharacter): Quality[] {
    //     const selectedQualities = character.qualities.positive;
    //     let diff: Quality[] = [];

    //     for(const quality of positiveQualities) {
    //         if(!selectedQualities.find(selectedQuality => selectedQuality.name === quality.name) || quality.name === "home ground") {
    //             diff.push(quality);
    //         }
    //     }

    //     return diff;
    // }

    // addNegativeQuality(character: ShadowRun5ECharacter, qualityName: string): void {
    //     const qualityReference: QualityReference = { name: qualityName };
    //     const qualityMaxRating = this.getQualityMaxRating(qualityName);

    //     if(qualityMaxRating > 1) {
    //         qualityReference.ratingValue = 1;
    //     }

    //     character.qualities.negative.push(qualityReference);

    //     this.dataStoreService.updateCharacter(character.id, character);
    // }

    // getUnselectedNegativeQualities(character: ShadowRun5ECharacter): Quality[] {
    //     const selectedQualities = character.qualities.negative;
    //     let diff: Quality[] = [];

    //     for(const quality of negativeQualities) {
    //         if(!selectedQualities.find(selectedQuality => selectedQuality.name === quality.name)) {
    //             diff.push(quality);
    //         }
    //     }

    //     return diff;
    // }

    // getAllSelectedPositiveQualities(character: ShadowRun5ECharacter): Quality[] {
    //     let qualities: Quality[] = [];
    //     const characterQualities = character.qualities.positive;

    //     for (const characterQuality of characterQualities) {
    //         const quality = this.getQualityByName(characterQuality.name);

    //         if(quality) {
    //             qualities.push(quality);
    //         }
    //     }
        
    //     return qualities;
    // }

    // getAllSelectedNegativeQualities(character: ShadowRun5ECharacter): Quality[] {
    //     let qualities: Quality[] = [];
    //     const qualityRefernces = character.qualities.negative;

    //     for (const characterQuality of qualityRefernces) {
    //         const quality = this.getQualityByName(characterQuality.name);

    //         if(quality) {
    //             qualities.push(quality);
    //         }
    //     }
    //     return qualities;
    // }

    // getQualityByName(qualityName: string): Quality | undefined {
    //     const allQualities = [...positiveQualities, ...negativeQualities];
    //     return allQualities.find(quality => quality.name === qualityName);
    // }

    // getQualityMaxRating(qualityName: string): number {
    //     const quality = this.getQualityByName(qualityName);

    //     if(quality) {
    //         return quality.maxRating;
    //     }

    //     return 0;
    // }

    // getQualityKarmaCost(currentRatingValue: number, qualityName: string): number {
    //     let cost = 0;
    //     const qualityKarmaCost = this.getQualityByName(qualityName)?.karmaCost;

    //     if(qualityKarmaCost) {
    //         cost = qualityKarmaCost * currentRatingValue;
    //     }

    //     return cost;
    // }

    // doesCharacterHaveQuality(character: ShadowRun5ECharacter, qualityName: string): boolean {
    //     const characterQualities = [...character.qualities.positive, ...character.qualities.negative];
        
    //     for(const qualityRef of characterQualities) {
    //         if(qualityRef.name === qualityName) {
    //             return true;
    //         }
    //     }

    //     return false;
    // }

    // // Magic / Resonance
    // getMagicUserTypeOptions(character: ShadowRun5ECharacter): MagicUserType[] {
    //     let magicUserTypeOptions: MagicUserType[] = [MagicUserType.None];
        
    //     const characterMagicPriority = character.priorities.magicResonance;
    //     const priorityTableRow = this.getPriorityRow(characterMagicPriority);

    //     if (priorityTableRow) {
    //         magicUserTypeOptions = Object.keys(priorityTableRow.magicResonance) as MagicUserType[];
    //     }

    //     return magicUserTypeOptions;
    // }

    // getMagicalMinimumValue(character: ShadowRun5ECharacter): number {
    //     let minimumValue = 0;

    //     const magicUserTypeStartingValues = this.getMagicUserTypeStartingValues(character);
        
    //     if(magicUserTypeStartingValues && magicUserTypeStartingValues.magic) {
    //         minimumValue = magicUserTypeStartingValues.magic;
    //     }

    //     if(magicUserTypeStartingValues && magicUserTypeStartingValues.resonance) {
    //         minimumValue = magicUserTypeStartingValues.resonance;
    //     }

    //     return minimumValue;
    // }

    // getMagicMaximumValue(): number {
    //     //TODO: Add logic for exceplional attribute
    //     return 6;
    // }

    // private getMagicUserTypeStartingValues(character: ShadowRun5ECharacter): MagicalStartingValues | undefined {
    //     let startingValues: MagicalStartingValues | undefined;

    //     const characterMagicPriority = character.priorities.magicResonance;
    //     const priorityTableRow = this.getPriorityRow(characterMagicPriority);

    //     if (priorityTableRow) {
    //         startingValues = priorityTableRow.magicResonance[character.magicUserType as keyof typeof priorityTableRow.magicResonance];
    //     }

    //     return startingValues;
    // }

    // // Karma
    // getRemainingStartingKarma(character: ShadowRun5ECharacter): number {
    //     let remainingStartingKarma = this.getStartingKarma(character);

    //     const characterPositiveQualities = character.qualities.positive;
    //     const characterNegativeQualities = character.qualities.negative;

    //     for(const characterPositiveQuality of characterPositiveQualities) {
    //         const quality = this.getQualityByName(characterPositiveQuality.name);

    //         if(quality) {
    //             const ratingValue = characterPositiveQuality.ratingValue || 1;
    //             remainingStartingKarma = remainingStartingKarma - (quality.karmaCost * ratingValue);
    //         }
            
    //     }

    //     for(const characterNegativeQuality of characterNegativeQualities) {
    //         const quality = this.getQualityByName(characterNegativeQuality.name);

    //         if(quality) {
    //             const ratingValue = characterNegativeQuality.ratingValue || 1;
    //             remainingStartingKarma = remainingStartingKarma + (quality.karmaCost * quality.karmaCost * ratingValue);
    //         }
    //     }

    //     return remainingStartingKarma;

    // }

    // getStartingKarma(character: ShadowRun5ECharacter): number {
    //     let startingKarma = 25;

    //     if(character.levelOfPlay === LevelOfPlayName.Street) {
    //         startingKarma = 13;
    //     }

    //     if(character.levelOfPlay === LevelOfPlayName.Prime) {
    //         startingKarma = 35;
    //     }

    //     return startingKarma;
    // }

    // // Validators
    // isCharacterTechnomancer(character: ShadowRun5ECharacter): boolean {
    //     return character.magicUserType === MagicUserType.Technomancer;
    // }

    // isCharacterMagicUser(character: ShadowRun5ECharacter): boolean {
    //     if(character.magicUserType !== MagicUserType.None && !this.isCharacterTechnomancer(character)) {
    //         return true;
    //     }

    //     return false;
    // }
} 
