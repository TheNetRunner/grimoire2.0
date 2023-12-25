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
    Edge = "edge",
}

export enum MagicAttribute {
    Magic = "magic",
    Resonance = "resonance",
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
    [Attribute.Edge]: Attribute;
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

export interface MagicAttributes {
    [MagicAttribute.Magic]: Attribute;
    [MagicAttribute.Resonance]: Attribute;
}