import { MetaType } from "./meta-type.interface";
import { MagicUserType } from "./magic.interface";
import { LevelOfPlayName } from "./settings.interface";

export enum Priority {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
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

export interface MetaTypeStartingValues {
	name: MetaType;
	specialAttrPoints: number;
}

export interface PriorityTableRow {
	metaTypes: MetaTypeStartingValues[];
	attributePoints: number;
    magicText: { title: string; description: string; }[];
	skills: {
		skillPoints: number;
		skillGroupPoints: number;
	};
    magic: {
        [MagicUserType.Adept]?: MagicalStartingValues;
        [MagicUserType.Magician]?: MagicalStartingValues;
        [MagicUserType.AspectedMagician]?: MagicalStartingValues;
        [MagicUserType.MysticAdept]?: MagicalStartingValues
        [MagicUserType.Technomancer]?: MagicalStartingValues;
    },
	resources: {
        [LevelOfPlayName.Street]: number;
        [LevelOfPlayName.Normal]: number;
        [LevelOfPlayName.Prime]: number;
    }
}

export interface PriorityTable {
    [Priority.A]: PriorityTableRow;
    [Priority.B]: PriorityTableRow;
    [Priority.C]: PriorityTableRow;
    [Priority.D]: PriorityTableRow;
    [Priority.E]: PriorityTableRow;
}
