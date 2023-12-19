import { MetaType } from './meta-type.model';

export enum Attribute {
    Body = "body",
    Agility = "agility",
    Reaction = "reaction",
    Strength = "strength",
    WillPower = "willPower",
    Logic = "logic",
    Intuition = "intuition",
    Charisma = "charisma",
    Magic = "magic",
    Resonance = "resonance",
    Edge = "edge",
}

export enum SpecialAttributeName {
    Edge = "edge",
    Magic = "magic",
    Resonance = "resonance",
}

export interface AttributeData {
    baseValue: number;
    maxValue: number;
    buildPoints: number;
    increases: number;
    exceptional: boolean;
}

export interface Attributes {
    [Attribute.Body]: Attribute;
    [Attribute.Agility]: Attribute;
    [Attribute.Reaction]: Attribute;
    [Attribute.Strength]: Attribute;
    [Attribute.WillPower]: Attribute;
    [Attribute.Logic]: Attribute;
    [Attribute.Intuition]: Attribute;
    [Attribute.Charisma]: Attribute;
}

export interface AttributeMinMax {
    minimum: number;
    maximum: number;
}

export interface AttributesTableRow {
    metaTypeName: MetaType;
    racial: string;
    attributes: Attributes;
}

export interface SpecialAttributes {
    [SpecialAttributeName.Edge]: Attribute;
    [SpecialAttributeName.Magic]: Attribute;
    [SpecialAttributeName.Resonance]: Attribute;
}