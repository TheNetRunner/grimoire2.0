import { MetaTypeName } from "../models/meta-types.model";
import { AttributesTableRow } from "../models/attribute.model";

export const attributesTable: AttributesTableRow[] = [
  {
    metaTypeName: MetaTypeName.human,
    racial: "none",
    attributes:{
        body: { minimum: 1, maximum: 6 },
        agility: { minimum: 1, maximum: 6 },
        reaction: { minimum: 1, maximum: 6 },
        strength: { minimum: 1, maximum: 6 },
        willPower: { minimum: 1, maximum: 6 },
        logic: { minimum: 1, maximum: 6 },
        intuition: { minimum: 1, maximum: 6 },
        charisma: { minimum: 1, maximum: 6 },
        edge: { minimum: 1, maximum: 7 },
    }
    },
    {
    metaTypeName: MetaTypeName.elf,
    racial: "Low-light vision.",
    attributes:{
        body: { minimum: 1, maximum: 6 },
        agility: { minimum: 2, maximum: 7 },
        reaction: { minimum: 1, maximum: 6 },
        strength: { minimum: 1, maximum: 6 },
        willPower: { minimum: 1, maximum: 6 },
        logic: { minimum: 1, maximum: 6 },
        intuition: { minimum: 1, maximum: 6 },
        charisma: { minimum: 3, maximum: 8 },
        edge: { minimum: 1, maximum: 6 },
    }
  },
  {
    metaTypeName: MetaTypeName.dwarf,
    racial: "+2 dice for pathogen and toxin resistance, +20% increased lifestyle cost.",
    attributes:{
        body: { minimum: 3, maximum: 8 },
        agility: { minimum: 1, maximum: 6 },
        reaction: { minimum: 1, maximum: 5 },
        strength: { minimum: 3, maximum: 8 },
        willPower: { minimum: 2, maximum: 7 },
        logic: { minimum: 1, maximum: 6 },
        intuition: { minimum: 1, maximum: 6 },
        charisma: { minimum: 1, maximum: 6 },
        edge: { minimum: 1, maximum: 6 },
    }
  },
  {
    metaTypeName: MetaTypeName.ork,
    racial: "Low-light vision.",
    attributes:{
        body: { minimum: 4, maximum: 9 },
        agility: { minimum: 1, maximum: 6 },
        reaction: { minimum: 1, maximum: 6 },
        strength: { minimum: 3, maximum: 8 },
        willPower: { minimum: 1, maximum: 6 },
        logic: { minimum: 1, maximum: 5 },
        intuition: { minimum: 1, maximum: 6 },
        charisma: { minimum: 1, maximum: 5 },
        edge: { minimum: 1, maximum: 6 },
    }
  },
  {
    metaTypeName: MetaTypeName.troll,
    racial: "Thermographic vision, +1 Reach, +1 dermal armor, +100% increased lifestyle costs.",
    attributes:{
        body: { minimum: 5, maximum: 10 },
        agility: { minimum: 1, maximum: 5 },
        reaction: { minimum: 1, maximum: 6 },
        strength: { minimum: 5, maximum: 10 },
        willPower: { minimum: 1, maximum: 6 },
        logic: { minimum: 1, maximum: 5 },
        intuition: { minimum: 1, maximum: 5 },
        charisma: { minimum: 1, maximum: 4 },
        edge: { minimum: 1, maximum: 6 },
    }
  },
];
