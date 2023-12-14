export enum MetaTypeName {
    human = "human",
    elf = "elf",
    ork = "ork",
    dwarf = "dwarf",
    troll = "troll",
}

export interface MetaTypeStartingValues {
	name: MetaTypeName;
	specialAttrPoints: number;
}

export interface MetaTypeDescription {
    latinName: string;
    text: string;
}

export interface MetaTypeDescriptions {
    human: MetaTypeDescription;
    ork: MetaTypeDescription;
    elf: MetaTypeDescription;
    troll: MetaTypeDescription;
    dwarf: MetaTypeDescription;
}