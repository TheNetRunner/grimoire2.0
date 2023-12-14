import { Skill, SkillGroup } from "./skill.model";

export enum MagicUserType {
    None = "",
    Adept = "adept",
    AspectedMagician = "aspected magician",
    Magician = "magician",
    MysticAdept = "mystic adept",
    Technomancer = "technomancer",
}

export interface Magician {
    skills: Skill[];
    skillGroups: SkillGroup[];
    spells: Spell[];
    rituals: Spell[];
    alchemicalFormulas: Spell[];
    spirits: Spirit[];
    tradition: string;
}

export interface MysticAdept {
    adeptPowers: AdeptPower[]
    spells: Spell[];
    rituals: Spell[];
    alchemicalFormulas: Spell[];
    spirits: Spirit[];
    powerPoints: number;
}

export interface Adept {
    adeptPowers: AdeptPower[];
    startingPowerPoints: number;
    powerPoints: number;
}

export interface Spell {
    name: string;
    page: string;
    type: "physical" | "mana";
    keyWords: string[];
    range: string;
    damange: "physical" | "stun";
    duration: "instantaneous" | "sustained" | "permanent";
    drain: number;
    description: string;
}

export interface Spirit {
    name: string;
}

export interface AdeptPower {
    name: string;
    rating: number;
    cost: number;
    description: string;
}

export interface AspectedMagician {
    aspectType: AspectType;
    spirits: Spirit[];
    alchemicalFormulas: Spell[];
    spells: Spell[];
    rituals: Spell[];
}

export enum AspectType {
    SORCERY = 'sorcery',
    CONJURING = 'conjuring',
    ENCHANTING = 'enchanting',
}

export interface Technomancer {
   resonance: number;
   resonanceSkills: {
        rating: number;
        qty: number;
    };
    complexForms: number;
}