import { MetaTypeName } from "./meta-types.model";

export interface MetaTypeAttributesTableRow {
	metaTypeName: MetaTypeName;
	racial: string;
    attributes: {
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
}

export interface AttributeMinMax {
    minimum: number;
    maximum: number;
}