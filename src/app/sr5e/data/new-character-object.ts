import { MetaTypeName } from '../models/meta-types.model';
import { LevelOfPlay, Priority } from '../models/priority-table.model';

export const newCharacterObject = {
    id: "",
    name: "New Character",
    role: "face",
    ethnicity: "",
    age: "",
    gender: "",
    eyes: "",
    hair: "",
    height: "",
    weight: "",
    misc: "",
    streetCred: "",
    notoriety: "",
    image: "human_one",
    publicAwareness: "",
	levelOfPlay: LevelOfPlay.Normal,
	totalKarma: 25,
    startingKarma: 25,
    nuyen: 0,
	bio: "",
	metaType: MetaTypeName.human,
	priorities: {
		metaType: Priority.A,
		attributes: Priority.B,
		magicResonance: Priority.C,
		skills: Priority.D,
		resources: Priority.E,
	},
	attributes: {
		body: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        agility: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        reaction: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        strength: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        willPower: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        logic: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        intuition: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
        charisma: {
            maximum: 6,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
	},
    specialAttributes: {
        edge: {
            maximum: 7,
            minimum: 1,
            buildPoints: 0,
            increases: 0
        },
    },
	qualities: {
		positive: [],
		negative: [],
		attribute: ""
	},
}