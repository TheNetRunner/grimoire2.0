import { MetaType } from "./meta-types.model";

export enum Priority {
    A = 'a',
    B = 'b',
    C = 'c',
    D = 'd',
    E = 'e'
}

export enum LevelOfPlay {
    Street = 'street',
    Normal = 'normal',
    Prime = 'prime'
}

export interface PriorityTableRow {
    name: Priority;
	metaTypes: MetaType[];
	attributePoints: number;
    magicResonanceText: MagicResonanceText[];
	skills: {
		skillPoints: number;
		skillGroupPoints: number;
	};
	resources: {
		[LevelOfPlay.Street]: number;
        [LevelOfPlay.Normal]: number;
        [LevelOfPlay.Prime]: number;
	};
}

interface MagicResonanceText {
    title: string;
    description: string;
}

interface MagicalStartingAllowance {}

interface MysticAdept extends MagicalStartingAllowance {
    magic: number;
    skills: {
        rating: number;
        qty: number;
    };
    spells: number;
}

interface Technomancer extends MagicalStartingAllowance {
    resonance: number;
    skills: {
        rating: number;
        qty: number;
    };
    complexForms: number;
}

interface Adept extends MagicalStartingAllowance {
    magic: number;
    activeSkills: {
        rating: number;
        qty: number;
    };
}

interface AspectedMagician extends MagicalStartingAllowance {
    magic: number;
    skillGroups: {
        rating: number;
        qty: number;
    };
}