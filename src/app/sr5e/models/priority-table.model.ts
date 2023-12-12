import { MetaType } from "./meta-types.model";
import { MagicUserType } from "./magic.model";
import { Adept, AspectedMagician, Magician, MysticAdept, Technomancer } from "./magic.model";

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
    magicResonance: {
        [MagicUserType.Adept]: Adept | null;
        [MagicUserType.Magician]: Magician | null;
        [MagicUserType.AspectedMagician]: AspectedMagician | null;
        [MagicUserType.MysticAdept]: MysticAdept | null;
        [MagicUserType.Technomancer]: Technomancer | null;
    },
	resources: {
		[LevelOfPlay.Street]: number;
        [LevelOfPlay.Normal]: number;
        [LevelOfPlay.Prime]: number;
	};
}

export interface MagicResonanceText {
    title: string;
    description: string;
}