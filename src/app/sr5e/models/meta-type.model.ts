import { Attribute } from './attribute.model';

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

export interface MetaTypeAttributesTableRow {
	metaTypeName: MetaType;
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
        [Attribute.Magic]: { base: number; max: number; }
        [Attribute.Resonance]: { base: number; max: number; }
    }
}