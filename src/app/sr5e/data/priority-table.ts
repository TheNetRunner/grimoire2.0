import { PriorityTableRow, Priority } from "../models/priority-table.model";
import { MetaTypeName } from "../models/meta-types.model";

export const priorityTable: PriorityTableRow[] = [
	{
		name: Priority.A,
        metaTypes: [
			{
				name: MetaTypeName.human,
				specialAttrPoints: 9,
			},
			{
				name: MetaTypeName.elf,
				specialAttrPoints: 8,
			},
			{
				name: MetaTypeName.dwarf,
				specialAttrPoints: 7,
			},
			{
				name: MetaTypeName.ork,
				specialAttrPoints: 7,
			},
			{
				name: MetaTypeName.troll,
				specialAttrPoints: 5,
			},
		],
		attributePoints: 24,
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
			skillPoints: 46,
			skillGroupPoints: 10,
		},
		resources: {
			street: 75000,
			normal: 450000,
			prime: 500000,
		},
	},
	{
        name: Priority.B,
		metaTypes: [
			{
				name: MetaTypeName.human,
				specialAttrPoints: 7,
			},
			{
				name: MetaTypeName.elf,
				specialAttrPoints: 6,
			},
			{
				name: MetaTypeName.dwarf,
				specialAttrPoints: 4,
			},
			{
				name: MetaTypeName.ork,
				specialAttrPoints: 4,
			},
			{
				name: MetaTypeName.troll,
				specialAttrPoints: 0,
			},
		],
		attributePoints: 20,
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
			skillPoints: 36,
			skillGroupPoints: 5,
		},
		resources: {
			street: 50000,
			normal: 275000,
			prime: 325000,
		},
	},
	{
        name: Priority.C,
		metaTypes: [
			{
				name: MetaTypeName.human,
				specialAttrPoints: 5,
			},
			{
				name: MetaTypeName.elf,
				specialAttrPoints: 3,
			},
			{
				name: MetaTypeName.dwarf,
				specialAttrPoints: 1,
			},
			{
				name: MetaTypeName.ork,
				specialAttrPoints: 0,
			},
		],
		attributePoints: 16,
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
			skillPoints: 28,
			skillGroupPoints: 2,
		},
		resources: {
			street: 25000,
			normal: 140000,
			prime: 210000,
		},
	},
	{
        name: Priority.D,
		metaTypes: [
			{
				name: MetaTypeName.human,
				specialAttrPoints: 3,
			},
			{
				name: MetaTypeName.elf,
				specialAttrPoints: 0,
			},
		],
		attributePoints: 14,
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
			skillPoints: 22,
			skillGroupPoints: 0,
		},
		resources: {
			street: 15000,
			normal: 50000,
			prime: 150000,
		},
	},
    {
        name: Priority.E,
		metaTypes: [
			{
				name: MetaTypeName.human,
				specialAttrPoints: 1,
			},
		],
		attributePoints: 12,
		magicResonanceText: [],
		skills: {
			skillPoints: 18,
			skillGroupPoints: 0,
		},
		resources: {
			street: 6000,
			normal: 6000,
			prime: 100000,
		},
	},
];