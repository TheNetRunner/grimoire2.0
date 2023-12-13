export enum MagicUserType {
    None = "",
    Adept = "adept",
    AspectedMagician = "aspected magician",
    Magician = "magician",
    MysticAdept = "mystic adept",
    Technomancer = "technomancer",
}

export interface Magician {
    magic: number;
    magicSkills: {
        rating: number;
        qty: number;
    };
    spells: number;
}

export interface MysticAdept {
    magic: number;
    magicSkills: {
        rating: number;
        qty: number;
    };
    spells: number;
}

export interface Technomancer {
   resonance: number;
   resonanceSkills: {
        rating: number;
        qty: number;
    };
    complexForms: number;
}

export interface Adept {
    magic: number;
    activeSkills: {
        rating: number;
        qty: number;
    };
}

export interface AspectedMagician {
    magic: number;
    magicSkillGroups: {
        rating: number;
        qty: number;
    };
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