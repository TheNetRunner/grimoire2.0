import { Attribute, MagicAttribute } from "./attribute.interface";
import { LevelOfPlay } from "./settings.interface";
import { MagicUserType } from "./magic.interface";
import { Priority } from "./priority.interface";
import { QualityReference } from "./quality.interface";
import { MetaType } from "./meta-type.model";

export enum RoleName { 
    Decker = 'decker',
    Face = 'face',
    Spellcaster = 'spellcaster',
    Adept = 'adept',
    Rigger = 'rigger',
    Samurai = 'samurai',
    StreetSamurai = 'street Samurai',
    Technomancer = 'technomancer'
}

export interface BasicInformation {
    name: string;
    role: RoleName;
    ethnicity: string;
    age: string;
    gender: string;
    eyes: string;
    hair: string;
    height: string;
    weight: string;
    streetCred: string;
    notoriety: string;
    publicAwareness: string;
    misc: string;
    bio: string;
}

export interface AttributeData {
    racialBaseValue?: number;
    racialMaxValue?: number;
    buildPoints: number;
    increases: number;
    exceptional: boolean;
}

export interface MagicAttributeData {
    buildPoints: number;
    increases: number;
    exceptional: boolean;
}

export interface PrioritiesData {
    metaType: Priority;
    attributes: Priority;
    skills: Priority;
    resources: Priority;
    magic: Priority;
}

export interface ShadowRun5ECharacterData {
    id: string;
    basic: BasicInformation;
    imageName: string;
    priorities: PrioritiesData;
    attributes: {
        [Attribute.Body]: AttributeData;
        [Attribute.Agility]: AttributeData;
        [Attribute.Reaction]: AttributeData;
        [Attribute.Strength]: AttributeData;
        [Attribute.WillPower]: AttributeData;
        [Attribute.Logic]: AttributeData;
        [Attribute.Intuition]: AttributeData;
        [Attribute.Charisma]: AttributeData;
        [Attribute.Edge]: AttributeData;
    }
    metaType: MetaType;
    karmaPoints: number;
    nuyen: number;
    essence: number;
    qualities: {
        positive: QualityReference[];
        negative: QualityReference[];
    },
    magic: {
        magicUserType: MagicUserType;
        attributes: {
            [MagicAttribute.Magic]: MagicAttributeData,
            [MagicAttribute.Resonance]: MagicAttributeData
        }
    },
    settings: {
        levelOfPlay: LevelOfPlay;
    }
}