import { MetaTypeAttributesTable } from "../models/meta-type-attribute-table.interface";

export const metaTypeAttributesTable: MetaTypeAttributesTable = {
	human: {
		metaTypeName: "human",
		racial: "none",
		body: {
			minimum: 1,
			maximum: 6,
		},
		agility: {
			minimum: 1,
			maximum: 6,
		},
		reaction: {
			minimum: 1,
			maximum: 6,
		},
		strength: {
			minimum: 1,
			maximum: 6,
		},
		willPower: {
			minimum: 1,
			maximum: 6,
		},
		logic: {
			minimum: 1,
			maximum: 6,
		},
		intuition: {
			minimum: 1,
			maximum: 6,
		},
		charisma: {
			minimum: 1,
			maximum: 6,
		},
		edge: {
			minimum: 2,
			maximum: 7,
		},
	},
	elf: {
		metaTypeName: "elf",
		racial: "Low-light vision.",
		body: {
			minimum: 1,
			maximum: 6,
		},
		agility: {
			minimum: 2,
			maximum: 7,
		},
		reaction: {
			minimum: 1,
			maximum: 6,
		},
		strength: {
			minimum: 1,
			maximum: 6,
		},
		willPower: {
			minimum: 1,
			maximum: 6,
		},
		logic: {
			minimum: 1,
			maximum: 6,
		},
		intuition: {
			minimum: 1,
			maximum: 6,
		},
		charisma: {
			minimum: 3,
			maximum: 8,
		},
		edge: {
			minimum: 1,
			maximum: 6,
		},
	},
	dwarf: {
		metaTypeName: "dwarf",
		racial: "+2 dice for pathogen and toxin resistance, +20% increased lifestyle cost.",
		body: {
			minimum: 3,
			maximum: 8,
		},
		agility: {
			minimum: 1,
			maximum: 6,
		},
		reaction: {
			minimum: 1,
			maximum: 5,
		},
		strength: {
			minimum: 3,
			maximum: 8,
		},
		willPower: {
			minimum: 2,
			maximum: 7,
		},
		logic: {
			minimum: 1,
			maximum: 6,
		},
		intuition: {
			minimum: 1,
			maximum: 6,
		},
		charisma: {
			minimum: 1,
			maximum: 6,
		},
		edge: {
			minimum: 1,
			maximum: 6,
		},
	},
	ork: {
		metaTypeName: "ork",
		racial: "Low-light vision.",
		body: {
			minimum: 4,
			maximum: 9,
		},
		agility: {
			minimum: 1,
			maximum: 6,
		},
		reaction: {
			minimum: 1,
			maximum: 6,
		},
		strength: {
			minimum: 3,
			maximum: 8,
		},
		willPower: {
			minimum: 1,
			maximum: 6,
		},
		logic: {
			minimum: 1,
			maximum: 5,
		},
		intuition: {
			minimum: 1,
			maximum: 6,
		},
		charisma: {
			minimum: 1,
			maximum: 5,
		},
		edge: {
			minimum: 1,
			maximum: 6,
		},
	},
	troll: {
		metaTypeName: "troll",
		racial: "Thermographic vision, +1 Reach, +1 dermal armor, +100% increased lifestyle costs.",
		body: {
			minimum: 5,
			maximum: 10,
		},
		agility: {
			minimum: 1,
			maximum: 5,
		},
		reaction: {
			minimum: 1,
			maximum: 6,
		},
		strength: {
			minimum: 5,
			maximum: 10,
		},
		willPower: {
			minimum: 1,
			maximum: 6,
		},
		logic: {
			minimum: 1,
			maximum: 5,
		},
		intuition: {
			minimum: 1,
			maximum: 5,
		},
		charisma: {
			minimum: 1,
			maximum: 4,
		},
		edge: {
			minimum: 1,
			maximum: 6,
		},
	},
};
