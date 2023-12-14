import { PriorityTableRow, Priority, LevelOfPlayName } from "../models/priority-table.model";
import { MetaTypeName } from "../models/meta-types.model";
import { MagicUserType, Magician } from "../models/magic.model";
import { Adept, AspectedMagician, MysticAdept, Technomancer } from "../models/magic.model";

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
        magicResonance: {
            [MagicUserType.Magician]: { magic: 6, magicSkills: { rating: 5, qty: 2 }, spells: 10 },
            [MagicUserType.MysticAdept]: { magic: 6, magicSkills: { rating: 5, qty: 2 }, spells: 10 },
            [MagicUserType.Technomancer]: { resonance: 6, resonanceSkills: { rating: 5, qty: 2 }, complexForms: 5 },
        },
		skills: {
			skillPoints: 46,
			skillGroupPoints: 10,
		},
		resourceStartingValues: {
			[LevelOfPlayName.Street]: 75000,
			[LevelOfPlayName.Normal]: 450000,
			[LevelOfPlayName.Prime]: 500000,
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
        magicResonance: {
            [MagicUserType.Magician]: { magic: 4, magicSkills: { rating: 4, qty: 2 }, spells: 7 },
            [MagicUserType.MysticAdept]: { magic: 4, magicSkills: { rating: 4, qty: 2 }, spells: 7 },
            [MagicUserType.Technomancer]: { resonance: 4, resonanceSkills: { rating: 4, qty: 2 }, complexForms: 2 },
            [MagicUserType.Adept]: { magic: 6, adeptActiveSkills: { rating: 4, qty: 1 } },
            [MagicUserType.AspectedMagician]: { magic: 5, magicSkillGroups: { rating: 4, qty: 2 } },
        },
		skills: {
			skillPoints: 36,
			skillGroupPoints: 5,
		},
		resourceStartingValues: {
			[LevelOfPlayName.Street]: 50000,
			[LevelOfPlayName.Normal]: 275000,
			[LevelOfPlayName.Prime]: 325000,
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
        magicResonance: {
            [MagicUserType.Magician]: { magic: 3, magicSkills: { rating: 5, qty: 0 }, spells: 5 },
            [MagicUserType.MysticAdept]: { magic: 3, magicSkills: { rating: 5, qty: 0 }, spells: 5 },
            [MagicUserType.Technomancer]: { resonance: 3, resonanceSkills: { rating: 5, qty: 0 }, complexForms: 1 },
            [MagicUserType.Adept]: { magic: 4, adeptActiveSkills: { rating: 2, qty: 1 } },
            [MagicUserType.AspectedMagician]: { magic: 3, magicSkillGroups: { rating: 2, qty: 1 }  },
        },
		skills: {
			skillPoints: 28,
			skillGroupPoints: 2,
		},
		resourceStartingValues: {
			[LevelOfPlayName.Street]: 25000,
			[LevelOfPlayName.Normal]: 140000,
			[LevelOfPlayName.Prime]: 210000,
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
        magicResonance: {
            [MagicUserType.Adept]: { magic: 2, adeptActiveSkills: { rating: 0, qty: 0 } },
            [MagicUserType.AspectedMagician]: { magic: 2, magicSkillGroups: { rating: 2, qty: 0 }  },
        },
		skills: {
			skillPoints: 22,
			skillGroupPoints: 0,
		},
		resourceStartingValues: {
			[LevelOfPlayName.Street]: 15000,
			[LevelOfPlayName.Normal]: 50000,
			[LevelOfPlayName.Prime]: 150000,
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
        magicResonance: {},
		skills: {
			skillPoints: 18,
			skillGroupPoints: 0,
		},
		resourceStartingValues: {
			[LevelOfPlayName.Street]: 6000,
			[LevelOfPlayName.Normal]: 6000,
			[LevelOfPlayName.Prime]: 100000,
		},
	},
];