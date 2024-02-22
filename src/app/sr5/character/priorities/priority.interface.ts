import { MetaTypeName } from "../interfaces/meta-type.interface";
import { MagicUserType } from "../interfaces/magic.interface";
import { LevelOfPlayName } from "../interfaces/settings.interface";

export enum PriorityName {
    skills = "skills",
    attributes = "attributes",
    resources = "resources",
    metaType = "metaType",
    magic = "magic"
}

export enum Priority {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E"
}

export interface PrioritiesData {
    metaType: Priority;
    attributes: Priority;
    skills: Priority;
    resources: Priority;
    magic: Priority;
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
	name: MetaTypeName;
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
