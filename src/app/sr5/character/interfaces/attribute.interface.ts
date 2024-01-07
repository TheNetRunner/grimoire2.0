import { MetaType } from "./meta-type.interface";

export enum AttributeName {
    Body = "body",
    Agility = "agility",
    Reaction = "reaction",
    Strength = "strength",
    Willpower = "willpower",
    Logic = "logic",
    Intuition = "intuition",
    Charisma = "charisma",
    
}

export enum SpecialAttributeName {
    Edge = "edge",
    Magic = "magic",
    Resonance = "resonance",
}

export interface MetaTypeAttributesTableRow {
    racial: string;
    attributes: {
        [AttributeName.Body]: { base: number, max: number };
        [AttributeName.Agility]: { base: number, max: number };
        [AttributeName.Reaction]: { base: number, max: number };
        [AttributeName.Strength]: { base: number, max: number };
        [AttributeName.Willpower]: { base: number, max: number };
        [AttributeName.Logic]: { base: number, max: number };
        [AttributeName.Intuition]: { base: number, max: number };
        [AttributeName.Charisma]: { base: number, max: number };
        [SpecialAttributeName.Edge]: { base: number, max: number };
    };
}

export interface MetaTypeAttributesTable {
    [MetaType.Human]: MetaTypeAttributesTableRow;
    [MetaType.Ork]: MetaTypeAttributesTableRow;
    [MetaType.Elf]: MetaTypeAttributesTableRow;
    [MetaType.Troll]: MetaTypeAttributesTableRow;
    [MetaType.Dwarf]: MetaTypeAttributesTableRow;
}
