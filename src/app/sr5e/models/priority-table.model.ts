import { MetaTypeStartingValues } from "./meta-types.model";
import { MagicUserType } from "./magic.model";
import { Adept, AspectedMagician, Magician, MysticAdept, Technomancer } from "./magic.model";

export enum Priority {
    A = 'a',
    B = 'b',
    C = 'c',
    D = 'd',
    E = 'e'
}

export enum LevelOfPlayName {
    Street = 'street',
    Normal = 'normal',
    Prime = 'prime'
}

export interface MagicalStartingValues {
    magic?: number;
    magicSkills?: {
        rating: number;
        qty: number;
    };
    spells?: number;
    magicSkillGroups?: {
        rating: number;
        qty: number;
    };
    adeptActiveSkills?: {
        rating: number;
        qty: number;
    },
    complexForms?: number;
    resonance?: number;
    resonanceSkills?: {
        rating: number;
        qty: number;
    };
}

export interface ResourceStartingValues {
    [LevelOfPlayName.Street]: number;
    [LevelOfPlayName.Normal]: number;
    [LevelOfPlayName.Prime]: number;
}

export interface PriorityTableRow {
    name: Priority;
	metaTypes: MetaTypeStartingValues[];
	attributePoints: number;
    magicResonanceText: MagicResonanceText[];
	skills: {
		skillPoints: number;
		skillGroupPoints: number;
	};
    magicResonance: {
        [MagicUserType.Adept]?: MagicalStartingValues;
        [MagicUserType.Magician]?: MagicalStartingValues;
        [MagicUserType.AspectedMagician]?: MagicalStartingValues;
        [MagicUserType.MysticAdept]?: MagicalStartingValues
        [MagicUserType.Technomancer]?: MagicalStartingValues;
    },
	resourceStartingValues: ResourceStartingValues;
}

export interface MagicResonanceText {
    title: string;
    description: string;
}