import { RoleName, ShadowRun5ECharacter } from '../models/character.model';
import { MagicUserType } from '../models/magic.model';
import { MetaTypeName } from '../models/meta-types.model';
import { LevelOfPlayName, Priority } from '../models/priority-table.model';

export const newCharacterObject: ShadowRun5ECharacter = {
    id: "",
    name: "New Character",
    role: RoleName.FACE,
    magicUserType: MagicUserType.None,
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
	levelOfPlay: LevelOfPlayName.Normal,
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
            buildPoints: 0,
            increases: 0
        },
        agility: {
            buildPoints: 0,
            increases: 0
        },
        reaction: {
            buildPoints: 0,
            increases: 0
        },
        strength: {
            buildPoints: 0,
            increases: 0
        },
        willPower: {
            buildPoints: 0,
            increases: 0
        },
        logic: {
            buildPoints: 0,
            increases: 0
        },
        intuition: {
            buildPoints: 0,
            increases: 0
        },
        charisma: {
            buildPoints: 0,
            increases: 0
        },
	},
    specialAttributes: {
        edge: {
            buildPoints: 0,
            increases: 0
        },
        magic: {
            buildPoints: 0,
            increases: 0
        },
        resonance: {
            buildPoints: 0,
            increases: 0
        }
    },
	qualities: {
		positive: [],
		negative: [],
		attribute: ""
	}
}