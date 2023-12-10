export interface MetaTypeAttributesTable {
	[key: string]: MetaTypeAttributesTableRow;
}

export interface MetaTypeAttributesTableRow {
	metaTypeName: "human" | "elf" | "ork" | "dwarf" | "troll";
	racial: string;
	body: AttributeMinMax;
    agility: AttributeMinMax;
    reaction: AttributeMinMax;
    strength: AttributeMinMax;
    willPower: AttributeMinMax;
    logic: AttributeMinMax;
    intuition: AttributeMinMax;
    charisma: AttributeMinMax;
    edge: AttributeMinMax;
}

export interface AttributeMinMax {
    minimum: number;
    maximum: number;
}

export interface MetaTypeDescriptions {
	[key: string]: MetaTypeDescription;
}

export interface MetaTypeDescription {
	latinName: string;
	text: string;
}
