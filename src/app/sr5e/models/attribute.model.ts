import { MetaTypeName } from './meta-types.model';

export enum AttributeName {
    Body = "body",
    Agility = "agility",
    Reaction = "reaction",
    Strength = "strength",
    WillPower = "willPower",
    Logic = "logic",
    Intuition = "intuition",
    Charisma = "charisma",
}

export enum SpecialAttributeName {
    Edge = "edge",
}

export interface Attribute {
    buildPoints: number;
    increases: number;
}

export interface Attributes {
    [AttributeName.Body]: Attribute;
    [AttributeName.Agility]: Attribute;
    [AttributeName.Reaction]: Attribute;
    [AttributeName.Strength]: Attribute;
    [AttributeName.WillPower]: Attribute;
    [AttributeName.Logic]: Attribute;
    [AttributeName.Intuition]: Attribute;
    [AttributeName.Charisma]: Attribute;
}

export interface AttributeMinMax {
    minimum: number;
    maximum: number;
}

export interface AttributesTableRow {
    metaTypeName: MetaTypeName;
    racial: string;
    attributes: Record<AttributeName | SpecialAttributeName, AttributeMinMax>;
}

export interface SpecialAttributes {
    [SpecialAttributeName.Edge]: Attribute;
}