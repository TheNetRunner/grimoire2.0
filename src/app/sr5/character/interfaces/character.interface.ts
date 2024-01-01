import { AttributeName, MagicAttributeName } from "./attribute.interface"
import { LevelOfPlayName } from "./settings.interface";
import { MetaType } from "./meta-type.interface";
import { Priority } from "./priority.interface";
import { QualityReference } from "./quality.interface";
import { MagicUserType } from "./magic.interface";
import { ExceptionalAttribute } from "../../common/constants";

export enum RoleName { 
    Decker = 'decker',
    Face = 'face',
    Spell_Caster = 'spellcaster',
    Adept = 'adept',
    Rigger = 'rigger',
    Street_Samurai = 'street Samurai',
    Technomancer = 'technomancer'
}

export interface BasicData {
    name: string;
    role: RoleName;
    ethnicity: string;
    age: string;
    gender: string;
    eyes: string;
    hair: string;
    height: string;
    weight: string;
    misc: string;
    streetCred: string;
    notoriety: string;
    publicAwareness: string;
    bio: string;
}

export interface PriorityData {
    metaType: Priority;
    attributes: Priority;
    magic: Priority;
    skills: Priority;
    resources: Priority;
}

export interface AttributeData {
    buildPoints: number;
    increases: number;
}

export interface AttributesData {
    [AttributeName.Body]: AttributeData;
    [AttributeName.Agility]: AttributeData;
    [AttributeName.Reaction]: AttributeData;
    [AttributeName.Strength]: AttributeData;
    [AttributeName.Willpower]: AttributeData;
    [AttributeName.Logic]: AttributeData;
    [AttributeName.Intuition]: AttributeData;
    [AttributeName.Charisma]: AttributeData;
    [AttributeName.Edge]: AttributeData;
}

export interface MagicAttributesData {
    [MagicAttributeName.Magic]: AttributeData;
    [MagicAttributeName.Resonance]: AttributeData;
}

export type ExceptionalAttributesData = AttributeName | MagicAttributeName;

export interface SettingsData {
    levelOfPlay: LevelOfPlayName;
}

export interface ShadowRun5ECharacterData {
    id: string;
    basic: BasicData;
    imageName: string;
    priorities: PriorityData;
    metaType: MetaType;
    attributes: AttributesData;
    magicAttributes: MagicAttributesData;
    exceptionalAttributes: ExceptionalAttributesData[];
    startingKarma: number;
    karmaPoints: number;
    nuyen: number;
    essence: number;
    qualities: {
        positive: QualityReference[];
        negative: QualityReference[];
    },
    magic: {
        magicUserType: MagicUserType;
    },
    settings: SettingsData;
}