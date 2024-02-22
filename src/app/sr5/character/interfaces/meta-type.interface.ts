export enum MetaTypeName {
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
    [MetaTypeName.Human]: MetaTypeDescription;
    [MetaTypeName.Ork]: MetaTypeDescription;
    [MetaTypeName.Elf]: MetaTypeDescription;
    [MetaTypeName.Troll]: MetaTypeDescription;
    [MetaTypeName.Dwarf]: MetaTypeDescription;
}