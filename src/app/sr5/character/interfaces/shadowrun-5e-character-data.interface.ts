import { AttributeName, SpecialAttributeName } from "./attribute.interface"
import { LevelOfPlayName } from "./settings.interface";
import { MetaTypeName } from "./meta-type.interface";
import { PrioritiesData } from "../priorities/priority.interface";
import { QualityReference } from "../quality/quality.interface";
import { MagicData } from "./magic.interface";
import { SkillsData } from "../skills/skills.interface";

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

export interface AttributeData {
    buildPoints: number;
    increases: number;
}

export interface AttributesData {
    attributeBuildPoints: number;
    attributes: {
        [AttributeName.Body]: AttributeData;
        [AttributeName.Agility]: AttributeData;
        [AttributeName.Reaction]: AttributeData;
        [AttributeName.Strength]: AttributeData;
        [AttributeName.Willpower]: AttributeData;
        [AttributeName.Logic]: AttributeData;
        [AttributeName.Intuition]: AttributeData;
        [AttributeName.Charisma]: AttributeData;
    }
}

export interface SpecialAttributesData {
    specialAttributeBuildPoints: number;
    specialAttributes: {
        [SpecialAttributeName.Edge]: AttributeData;
        [SpecialAttributeName.Magic]: AttributeData;
        [SpecialAttributeName.Resonance]: AttributeData;
    }
}

export type ExceptionalAttributesData = AttributeName | SpecialAttributeName;

export interface SettingsData {
    levelOfPlay: LevelOfPlayName;
}

export interface Shadowrun5ECharacterData {
    id: string;
    version: string;
    basic: BasicData;
    imageName: string;
    priorities: PrioritiesData;
    metaType: MetaTypeName;
    attributesData: AttributesData;
    specialAttributesData: SpecialAttributesData;
    exceptionalAttributes: ExceptionalAttributesData[];
    startingKarma: number;
    karmaPoints: number;
    nuyen: number;
    essence: number;
    qualities: {
        positive: QualityReference[];
        negative: QualityReference[];
    },
    magicData: MagicData;
    skillsData: SkillsData;
    settingsData: SettingsData;
}