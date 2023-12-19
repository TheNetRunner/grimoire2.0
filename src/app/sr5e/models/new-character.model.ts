import { ShadowRun5ECharacterData, Priorities, Attribute, BasicInformation, Priority, MetaType, MagicUserType } from './new-character.interface';

export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
    }

    // ID
    get id(): string {
        return this.characterData.id;
    }

    // Basic
    get basic(): BasicInformation {
        return this.characterData.basic;
    }

    // MetaType
    get metaType(): MetaType {
        return this.characterData.metaType;
    }

    // Priority
    get priorities(): Priorities {
        return this.characterData.priorities;
    }

    handleMetaTypePriorityChange(priority: Priority): void {
        this.characterData.priorities.metaType = priority;
        this.characterData.metaType = MetaType.Human;
        this.characterData.image = "human_one";
    }

    handleMagicPriorityChange(priority: Priority): void {
        this.characterData.priorities.magic = priority;
        this.characterData.magic.magicUserType = MagicUserType.None;
    }

    // Attribute
    get attributes(): typeof this.characterData.attributes {
        return this.characterData.attributes;
    }

    setAttributeAsExceptional(attribute: Attribute): void {
        for(const attribute in this.characterData.attributes) {
            const key = attribute as keyof typeof this.characterData.attributes;
            this.characterData.attributes[key].exceptional = false;
        }

        this.characterData.attributes[attribute].exceptional = true;
    }

    // Quality
    get qualities(): typeof this.characterData.qualities {
        return this.characterData.qualities;
    }

    // Settings
    get settings(): typeof this.characterData.settings{
        return this.characterData.settings;
    }

    // Save
    getSaveObject(): ShadowRun5ECharacterData {
        return this.characterData;
    }
}