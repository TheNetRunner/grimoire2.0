import { Attribute } from './attribute.interface';

export enum MetaType {
    Human = "human",
    Elf = "elf",
    Ork = "ork",
    Dwarf = "dwarf",
    Troll = "troll",
}

export interface MetaTypeDescription {
    latinName: string;
    text: string;
}

export interface MetaTypeDescriptions {
    [MetaType.Human]: MetaTypeDescription;
    [MetaType.Elf]: MetaTypeDescription;
    [MetaType.Ork]: MetaTypeDescription;
    [MetaType.Dwarf]: MetaTypeDescription;
    [MetaType.Troll]: MetaTypeDescription;
}

export interface MetaTypeAttributeTableRow {
	racial: string;
    attributes: {
        [Attribute.Body]: { base: number; max: number; }
        [Attribute.Agility]: { base: number; max: number; }
        [Attribute.Reaction]: { base: number; max: number; }
        [Attribute.Strength]: { base: number; max: number; }
        [Attribute.WillPower]: { base: number; max: number; }
        [Attribute.Logic]: { base: number; max: number; }
        [Attribute.Intuition]: { base: number; max: number; }
        [Attribute.Charisma]: { base: number; max: number; }
        [Attribute.Edge]: { base: number; max: number; }
    }
    essence: number;
}

export interface MetaTypeAttributeTable {
    [MetaType.Human]: MetaTypeAttributeTableRow;
    [MetaType.Elf]: MetaTypeAttributeTableRow;
    [MetaType.Ork]: MetaTypeAttributeTableRow;
    [MetaType.Dwarf]: MetaTypeAttributeTableRow;
    [MetaType.Troll]: MetaTypeAttributeTableRow;
}

export interface MetaTypeDescription {
	latinName: string;
	text: string;
}

export interface MetaTypeDescriptions {
	[MetaType.Human]: MetaTypeDescription;
    [MetaType.Elf]: MetaTypeDescription;
    [MetaType.Dwarf]: MetaTypeDescription;
    [MetaType.Ork]: MetaTypeDescription;
    [MetaType.Troll]: MetaTypeDescription;
}