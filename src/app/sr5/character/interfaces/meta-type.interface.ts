export enum MetaType {
    Human = "human",
    Dwarf = "dwarf",
    Elf = "elf",
    Ork = "ork",
    Troll = "troll",
}

export interface MetaTypeDescription {
    latinName: string;
    text: string;
}

export interface MetaTypeDescriptions {
    [MetaType.Human]: MetaTypeDescription;
    [MetaType.Ork]: MetaTypeDescription;
    [MetaType.Elf]: MetaTypeDescription;
    [MetaType.Troll]: MetaTypeDescription;
    [MetaType.Dwarf]: MetaTypeDescription;
}