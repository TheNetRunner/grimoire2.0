import { ShadowRun5ECharacterData, MetaType, MagicUserType, RoleName, LevelOfPlayName, Attribute, Priority } from '../models/new-character.interface';

export const newCharacterObject: ShadowRun5ECharacterData = {
    id: "",
    basic: {
        name: "New Character",
        role: RoleName.Face,
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
        publicAwareness: "",
        bio: "",
        image: "human_one",
    },
	karmaPoints: 25,
    nuyen: 0,
	metaType: MetaType.Human,
	priorities: {
		metaType: Priority.A,
		attributes: Priority.B,
		magic: Priority.C,
		skills: Priority.D,
		resources: Priority.E,
	},
	attributes: {
        [Attribute.Body]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Agility]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Reaction]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Strength]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Willpower]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Logic]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Intuition]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Charisma]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Edge]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Magic]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Resonance]: {
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
    },
    settings: {
        levelOfPlay: LevelOfPlayName.Normal,
    }
}