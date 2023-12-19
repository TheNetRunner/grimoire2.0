import { MetaTypeName } from "../models/meta-type.model";
import { MetaTypeAttributesTableRow } from "../models/meta-type-attribute-table.model";
import { AttributeName } from "../models/attribute.model";

export const attributesTable: MetaTypeAttributesTableRow[] = [
    {
        metaTypeName: MetaTypeName.human,
        racial: "none",
        attributes: [
            {
                name: AttributeName.Body,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Agility,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Reaction,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Strength,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.WillPower,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Logic,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Intuition,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Charisma,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Edge,
                minimum: 1,
                maximum: 7
            },
        ]
    },
    {
        metaTypeName: MetaTypeName.elf,
        racial: "Low-light vision.",
        attributes: [
            {
                name: AttributeName.Body,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Agility,
                minimum: 2,
                maximum: 7
            },
            {
                name: AttributeName.Reaction,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Strength,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.WillPower,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Logic,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Intuition,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Charisma,
                minimum: 3,
                maximum: 8
            },
            {
                name: AttributeName.Edge,
                minimum: 1,
                maximum: 6
            },
        ]
    },
    {
        metaTypeName: MetaTypeName.dwarf,
        racial: "+2 dice for pathogen and toxin resistance, +20% increased lifestyle cost.",
        attributes: [
            {
                name: AttributeName.Body,
                minimum: 3,
                maximum: 8
            },
            {
                name: AttributeName.Agility,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Reaction,
                minimum: 1,
                maximum: 5
            },
            {
                name: AttributeName.Strength,
                minimum: 3,
                maximum: 8
            },
            {
                name: AttributeName.WillPower,
                minimum: 2,
                maximum: 7
            },
            {
                name: AttributeName.Logic,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Intuition,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Charisma,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Edge,
                minimum: 1,
                maximum: 6
            },
        ]
    },
    {
        metaTypeName: MetaTypeName.ork,
        racial: "Low-light vision.",
        attributes: [
            {
                name: AttributeName.Body,
                minimum: 3,
                maximum: 8
            },
            {
                name: AttributeName.Agility,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Reaction,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Strength,
                minimum: 3,
                maximum: 8
            },
            {
                name: AttributeName.WillPower,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Logic,
                minimum: 1,
                maximum: 5
            },
            {
                name: AttributeName.Intuition,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Charisma,
                minimum: 1,
                maximum: 5
            },
            {
                name: AttributeName.Edge,
                minimum: 1,
                maximum: 6
            },
        ]
    },
    {
        metaTypeName: MetaTypeName.troll,
        racial: "Thermographic vision, +1 Reach, +1 dermal armor, +100% increased lifestyle costs.",
        attributes: [
            {
                name: AttributeName.Body,
                minimum: 5,
                maximum: 10
            },
            {
                name: AttributeName.Agility,
                minimum: 1,
                maximum: 5
            },
            {
                name: AttributeName.Reaction,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Strength,
                minimum: 5,
                maximum: 10
            },
            {
                name: AttributeName.WillPower,
                minimum: 1,
                maximum: 6
            },
            {
                name: AttributeName.Logic,
                minimum: 1,
                maximum: 5
            },
            {
                name: AttributeName.Intuition,
                minimum: 1,
                maximum: 5
            },
            {
                name: AttributeName.Charisma,
                minimum: 1,
                maximum: 4
            },
            {
                name: AttributeName.Edge,
                minimum: 1,
                maximum: 6
            },
        ]
    },
];
