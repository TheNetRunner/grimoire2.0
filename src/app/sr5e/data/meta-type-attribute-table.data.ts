import { MetaType } from "../models/meta-type.model";
import { MetaTypeAttributeTable } from "../models/meta-type.model";
import { Attribute } from "../models/attribute.interface";

export const metaTypeAttributesTable: MetaTypeAttributeTable = {
    [MetaType.Human]: {
        racial: "None.",
        attributes: {
            [Attribute.Body]: { base: 1, max: 6 },
            [Attribute.Agility]: { base: 1, max: 6 },
            [Attribute.Reaction]: { base: 1, max: 6 },
            [Attribute.Strength]: { base: 1, max: 6 },
            [Attribute.WillPower]: { base: 1, max: 6 },
            [Attribute.Logic]: { base: 1, max: 6 },
            [Attribute.Intuition]: { base: 1, max: 6 },
            [Attribute.Charisma]: { base: 1, max: 6 },
            [Attribute.Edge]: { base: 1, max: 6 },
        },
        essence: 6,
    },
    [MetaType.Elf]: {
        racial: "Low-light vision.",
        attributes: {
            [Attribute.Body]: { base: 1, max: 6 },
            [Attribute.Agility]: { base: 2, max: 7 },
            [Attribute.Reaction]: { base: 1, max: 6 },
            [Attribute.Strength]: { base: 1, max: 6 },
            [Attribute.WillPower]: { base: 1, max: 6 },
            [Attribute.Logic]: { base: 1, max: 6 },
            [Attribute.Intuition]: { base: 1, max: 6 },
            [Attribute.Charisma]: { base: 3, max: 8 },
            [Attribute.Edge]: { base: 1, max: 6 },
        },
         essence: 6,
    },
    [MetaType.Dwarf]: {
        racial: "+2 dice for pathogen and toxin resistance, +20% increased lifestyle cost.",
        attributes: {
            [Attribute.Body]: { base: 3, max: 8 },
            [Attribute.Agility]: { base: 1, max: 6 },
            [Attribute.Reaction]: { base: 1, max: 5 },
            [Attribute.Strength]: { base: 3, max: 8 },
            [Attribute.WillPower]: { base: 2, max: 7 },
            [Attribute.Logic]: { base: 1, max: 6 },
            [Attribute.Intuition]: { base: 1, max: 6 },
            [Attribute.Charisma]: { base: 1, max: 6 },
            [Attribute.Edge]: { base: 1, max: 6 },
        },
        essence: 6,
    },
    [MetaType.Ork]: {
        racial: "Low-light vision.",
        attributes: {
            [Attribute.Body]: { base: 3, max: 8 },
            [Attribute.Agility]: { base: 1, max: 6 },
            [Attribute.Reaction]: { base: 1, max: 6 },
            [Attribute.Strength]: { base: 3, max: 8 },
            [Attribute.WillPower]: { base: 1, max: 6 },
            [Attribute.Logic]: { base: 1, max: 5 },
            [Attribute.Intuition]: { base: 1, max: 6 },
            [Attribute.Charisma]: { base: 1, max: 5 },
            [Attribute.Edge]: { base: 1, max: 6 },
        },
        essence: 6,
    },
    [MetaType.Troll]: {
        racial: "Thermographic vision, +1 Reach, +1 dermal armor, +100% increased lifestyle costs.",
        attributes: {
            [Attribute.Body]: { base: 5, max: 10 },
            [Attribute.Agility]: { base: 1, max: 5 },
            [Attribute.Reaction]: { base: 1, max: 6 },
            [Attribute.Strength]: { base: 5, max: 10 },
            [Attribute.WillPower]: { base: 1, max: 6 },
            [Attribute.Logic]: { base: 1, max: 5 },
            [Attribute.Intuition]: { base: 1, max: 5 },
            [Attribute.Charisma]: { base: 1, max: 4 },
            [Attribute.Edge]: { base: 1, max: 6 },
        },
        essence: 6,
    },
}
