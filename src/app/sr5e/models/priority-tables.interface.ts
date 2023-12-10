export interface PriorityTable {
    a: PriorityRow;
    b: PriorityRow;
    c: PriorityRow;
    d: PriorityRow;
    e: PriorityRow;
}

export interface PriorityRow {
	metaTypes: MetaType[];
	attributes: number;
    magicResonanceText: MagicResonanceText[];
	skills: {
		individualSkillsPoints: number;
		skillGroupPoints: number;
	};
	resources: {
		street: number;
		normal: number;
		prime: number;
	};
}

export interface MetaType {
	name: string;
	specialAttrPoints: number;
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