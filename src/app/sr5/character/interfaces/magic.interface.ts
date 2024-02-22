import { AttributeName } from "./attribute.interface";

export enum MagicUserType {
    None = "",
    Adept = "adept",
    AspectedMagician = "aspected magician",
    Magician = "magician",
    MysticAdept = "mystic adept",
    Technomancer = "technomancer",
}

export enum AspectedMagicianType {
    Conjurer = "conjurer",
    Enchanter = "enchanter",
    Sorcerer = "sorcerer",
}

export interface Tradition {
    name: string;
    combat: string;
    detection: string;
    health: string;
    illusion: string;
    manipulation: string;
    drain: AttributeName[];
    description: string;
}

export interface MagicianData {
    tradition: string;
    drain: AttributeName[];
    spells: Spell[];
}

export interface Spell {
    name: string;
}

export interface MagicData {
    magicUserType: MagicUserType;
}

