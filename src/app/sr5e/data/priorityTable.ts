import { PriorityTable } from "../models/priorityTables.interface";

export const priorityTable: PriorityTable = {
	a: {
		metaTypes: [
			{
				name: "human",
				specialAttrPoints: 9,
			},
			{
				name: "elf",
				specialAttrPoints: 8,
			},
			{
				name: "dwarf",
				specialAttrPoints: 7,
			},
			{
				name: "ork",
				specialAttrPoints: 7,
			},
			{
				name: "troll",
				specialAttrPoints: 5,
			},
		],
		attributes: 24,
		magicResonanceText: [
            {
                title: "Magician or Mystic Adept",
                description: "Magic 6, two Rating 5 Magical skills, 10 spells"
            },
            {
                title: "Technomancer",
                description: "Resonance 6, two Rating 5 Resonance skills, 5 complex forms"
            },
        ],
		skills: {
			individualSkillsPoints: 46,
			skillGroupPoints: 10,
		},
		resources: {
			street: 75000,
			normal: 450000,
			prime: 500000,
		},
	},
	b: {
		metaTypes: [
			{
				name: "human",
				specialAttrPoints: 7,
			},
			{
				name: "elf",
				specialAttrPoints: 6,
			},
			{
				name: "dwarf",
				specialAttrPoints: 4,
			},
			{
				name: "ork",
				specialAttrPoints: 4,
			},
			{
				name: "troll",
				specialAttrPoints: 0,
			},
		],
		attributes: 20,
		magicResonanceText: [
            {
                title: "Magician or Mystic Adept",
                description: "Magic 4, two Rating 4 Magical skills, 7 spells"
            },
            {
                title: "Technomancer",
                description: "Resonance 4, two Rating 4 Resonance skills, 2 complex forms"
            },
            {
                title: "Adept",
                description: "Magic 6, one Rating 4 Active skill group"
            },
            {
                title: "Aspected Magician",
                description: "Magic 5, two Rating 4 Magical skill groups"
            }
        ],
		skills: {
			individualSkillsPoints: 36,
			skillGroupPoints: 5,
		},
		resources: {
			street: 50000,
			normal: 275000,
			prime: 325000,
		},
	},
	c: {
		metaTypes: [
			{
				name: "human",
				specialAttrPoints: 5,
			},
			{
				name: "elf",
				specialAttrPoints: 3,
			},
			{
				name: "dwarf",
				specialAttrPoints: 1,
			},
			{
				name: "ork",
				specialAttrPoints: 0,
			},
		],
		attributes: 16,
		magicResonanceText: [
            {
                title: "Magician or Mystic Adept",
                description: "Magic 3, 5 spells"
            },
            {
                title: "Technomancer",
                description: "Resonance 3, 1 complex form"
            },
            {
                title: "Adept",
                description: "Magic 4, one Rating 2 Active skill"
            },
            {
                title: "Aspected Magician",
                description: "Magic 3, one Rating 2 Magical skill group"
            }
        ],
		skills: {
			individualSkillsPoints: 28,
			skillGroupPoints: 2,
		},
		resources: {
			street: 25000,
			normal: 140000,
			prime: 210000,
		},
	},
	d: {
		metaTypes: [
			{
				name: "human",
				specialAttrPoints: 3,
			},
			{
				name: "elf",
				specialAttrPoints: 0,
			},
		],
		attributes: 14,
		magicResonanceText: [
            {
                title: "Adept",
                description: "Magic 2"
            },
            {
                title: "Aspected Magician",
                description: "Magic 2"
            }
        ],
		skills: {
			individualSkillsPoints: 22,
			skillGroupPoints: 0,
		},
		resources: {
			street: 15000,
			normal: 50000,
			prime: 150000,
		},
	},
	e: {
		metaTypes: [
			{
				name: "human",
				specialAttrPoints: 1,
			},
		],
		attributes: 12,
		magicResonanceText: [],
		skills: {
			individualSkillsPoints: 18,
			skillGroupPoints: 0,
		},
		resources: {
			street: 6000,
			normal: 6000,
			prime: 100000,
		},
	},
};