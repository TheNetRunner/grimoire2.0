import { BasicData, ShadowRun5ECharacterData } from './interfaces/character.interface';
import { MetaType } from './interfaces/meta-type.interface';
import { SettingsData } from './interfaces/character.interface';

import AttributeHandler from './attributes/attribute-handler';

export class ShadowRun5ECharacter {
    private characterData: ShadowRun5ECharacterData;
    public attributeHandler: AttributeHandler;
    
    constructor(characterData: ShadowRun5ECharacterData) {
        this.characterData = characterData;
        this.attributeHandler = new AttributeHandler(characterData);
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
            attributes: this.attributeHandler.getAttributes()
        }

        return saveObject;
    }
}
