import { MetaTypeName } from "../interfaces/meta-type.interface";
import { Priority, PriorityTable } from "../priorities/priority.interface";
import { MagicUserType } from "../interfaces/magic.interface";
import { LevelOfPlayName } from "../interfaces/settings.interface";

export const priorityTable: PriorityTable = {
    [Priority.A]: {
        metaTypes: [
			{
				name: MetaTypeName.Human,
				specialAttrPoints: 9,
			},
			{
				name: MetaTypeName.Elf,
				specialAttrPoints: 8,
			},
			{
				name: MetaTypeName.Dwarf,
				specialAttrPoints: 7,
			},
			{
				name: MetaTypeName.Ork,
				specialAttrPoints: 7,
			},
			{
				name: MetaTypeName.Troll,
				specialAttrPoints: 5,
			},
		],
		attributePoints: 24,
		magicText: [
            {
                title: "Magician or Mystic Adept",
                description: "Magic 6, two Rating 5 Magical skills, 10 spells"
            },
            {
                title: "Technomancer",
                description: "Resonance 6, two Rating 5 Resonance skills, 5 complex forms"
            },
        ],
        magic: {
            [MagicUserType.Magician]: { magic: 6, magicSkills: { rating: 5, qty: 2 }, spells: 10 },
            [MagicUserType.MysticAdept]: { magic: 6, magicSkills: { rating: 5, qty: 2 }, spells: 10 },
            [MagicUserType.Technomancer]: { resonance: 6, resonanceSkills: { rating: 5, qty: 2 }, complexForms: 5 },
        },
		skills: {
			skillPoints: 46,
			skillGroupPoints: 10,
		},
		resources: {
			[LevelOfPlayName.Street]: 75000,
			[LevelOfPlayName.Normal]: 450000,
			[LevelOfPlayName.Prime]: 500000,
		},
	},
	[Priority.B]: {
		metaTypes: [
			{
				name: MetaTypeName.Human,
				specialAttrPoints: 7,
			},
			{
				name: MetaTypeName.Elf,
				specialAttrPoints: 6,
			},
			{
				name: MetaTypeName.Dwarf,
				specialAttrPoints: 4,
			},
			{
				name: MetaTypeName.Ork,
				specialAttrPoints: 4,
			},
			{
				name: MetaTypeName.Troll,
				specialAttrPoints: 0,
			},
		],
		attributePoints: 20,
		magicText: [
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
        magic: {
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
		resources: {
			[LevelOfPlayName.Street]: 50000,
			[LevelOfPlayName.Normal]: 275000,
			[LevelOfPlayName.Prime]: 325000,
		},
	},
    [Priority.C]: {
		metaTypes: [
			{
				name: MetaTypeName.Human,
				specialAttrPoints: 5,
			},
			{
				name: MetaTypeName.Elf,
				specialAttrPoints: 3,
			},
			{
				name: MetaTypeName.Dwarf,
				specialAttrPoints: 1,
			},
			{
				name: MetaTypeName.Ork,
				specialAttrPoints: 0,
			},
		],
		attributePoints: 16,
		magicText: [
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
        magic: {
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
		resources: {
			[LevelOfPlayName.Street]: 25000,
			[LevelOfPlayName.Normal]: 140000,
			[LevelOfPlayName.Prime]: 210000,
		},
	},
	[Priority.D]: {
		metaTypes: [
			{
				name: MetaTypeName.Human,
				specialAttrPoints: 3,
			},
			{
				name: MetaTypeName.Elf,
				specialAttrPoints: 0,
			},
		],
		attributePoints: 14,
		magicText: [
            {
                title: "Adept",
                description: "Magic 2"
            },
            {
                title: "Aspected Magician",
                description: "Magic 2"
            }
        ],
        magic: {
            [MagicUserType.Adept]: { magic: 2, adeptActiveSkills: { rating: 0, qty: 0 } },
            [MagicUserType.AspectedMagician]: { magic: 2, magicSkillGroups: { rating: 2, qty: 0 }  },
        },
		skills: {
			skillPoints: 22,
			skillGroupPoints: 0,
		},
		resources: {
			[LevelOfPlayName.Street]: 15000,
			[LevelOfPlayName.Normal]: 50000,
			[LevelOfPlayName.Prime]: 150000,
		},
	},
    [Priority.E]: {
		metaTypes: [
			{
				name: MetaTypeName.Human,
				specialAttrPoints: 1,
			},
		],
		attributePoints: 12,
		magicText: [],
        magic: {},
		skills: {
			skillPoints: 18,
			skillGroupPoints: 0,
		},
		resources: {
			[LevelOfPlayName.Street]: 6000,
			[LevelOfPlayName.Normal]: 6000,
			[LevelOfPlayName.Prime]: 100000,
		},
	},
};