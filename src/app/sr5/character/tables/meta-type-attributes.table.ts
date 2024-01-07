import { AttributeName, SpecialAttributeName } from "../interfaces/attribute.interface";
import { MetaType } from "../interfaces/meta-type.interface";

export const metaTypeAttributesTable = {
    [MetaType.Human]: {
        racial: "None.",
        attributes: {
            [AttributeName.Body]: { base: 1, max: 6 },
            [AttributeName.Agility]: { base: 1, max: 6 },
            [AttributeName.Reaction]: { base: 1, max: 6 },
            [AttributeName.Strength]: { base: 1, max: 6 },
            [AttributeName.Willpower]: { base: 1, max: 6 },
            [AttributeName.Logic]: { base: 1, max: 6 },
            [AttributeName.Intuition]: { base: 1, max: 6 },
            [AttributeName.Charisma]: { base: 1, max: 6 },
            [SpecialAttributeName.Edge]: { base: 2, max: 7 },
        }
    },
    [MetaType.Elf]: {
        racial: "Low-light vision.",
        attributes: {
            [AttributeName.Body]: { base: 1, max: 6 },
            [AttributeName.Agility]: { base: 2, max: 7 },
            [AttributeName.Reaction]: { base: 1, max: 6 },
            [AttributeName.Strength]: { base: 1, max: 6 },
            [AttributeName.Willpower]: { base: 1, max: 6 },
            [AttributeName.Logic]: { base: 1, max: 6 },
            [AttributeName.Intuition]: { base: 1, max: 6 },
            [AttributeName.Charisma]: { base: 3, max: 8 },
            [SpecialAttributeName.Edge]: { base: 2, max: 6 },
        }
    },
    [MetaType.Dwarf]: {
        racial:  "+2 dice for pathogen and toxin resistance, +20% increased Lifestyle cost.",
        attributes: {
            [AttributeName.Body]: { base: 3, max: 8 },
            [AttributeName.Agility]: { base: 1, max: 6 },
            [AttributeName.Reaction]: { base: 1, max: 6 },
            [AttributeName.Strength]: { base: 3, max: 8 },
            [AttributeName.Willpower]: { base: 2, max: 7 },
            [AttributeName.Logic]: { base: 1, max: 6 },
            [AttributeName.Intuition]: { base: 1, max: 6 },
            [AttributeName.Charisma]: { base: 1, max: 5 },
            [SpecialAttributeName.Edge]: { base: 2, max: 6 },
        }
    },
    [MetaType.Ork]: {
        racial: "Low-light vision.",
        attributes: {
            [AttributeName.Body]: { base: 4, max: 9 },
            [AttributeName.Agility]: { base: 1, max: 6 },
            [AttributeName.Reaction]: { base: 1, max: 6 },
            [AttributeName.Strength]: { base: 4, max: 9 },
            [AttributeName.Willpower]: { base: 1, max: 6 },
            [AttributeName.Logic]: { base: 1, max: 6 },
            [AttributeName.Intuition]: { base: 1, max: 6 },
            [AttributeName.Charisma]: { base: 1, max: 5 },
            [SpecialAttributeName.Edge]: { base: 2, max: 6 },
        }
    },
    [MetaType.Troll]: {
        racial: "Thermographic Vision, +1 Reach, +1 dermal armor, +100% increased Lifestyle costs.",
        attributes: {
            [AttributeName.Body]: { base: 5, max: 10 },
            [AttributeName.Agility]: { base: 1, max: 6 },
            [AttributeName.Reaction]: { base: 1, max: 6 },
            [AttributeName.Strength]: { base: 5, max: 10 },
            [AttributeName.Willpower]: { base: 1, max: 6 },
            [AttributeName.Logic]: { base: 1, max: 5 },
            [AttributeName.Intuition]: { base: 1, max: 5 },
            [AttributeName.Charisma]: { base: 1, max: 4 },
            [SpecialAttributeName.Edge]: { base: 2, max: 5 },
        }
    }
}