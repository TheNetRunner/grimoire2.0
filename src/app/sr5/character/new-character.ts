import { ShadowRun5ECharacterData, RoleName } from "./interfaces/character.interface";
import { MetaType } from "./interfaces/meta-type.interface";
import { Priority } from "./interfaces/priority.interface";
import { AttributeName, MagicAttributeName } from "./interfaces/attribute.interface";
import { MagicUserType } from "./interfaces/magic.interface";
import { LevelOfPlayName } from "./interfaces/settings.interface";

export const characterObject: ShadowRun5ECharacterData = {
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
    },
    imageName: "portrait_1",
    startingKarma: 25,
	karmaPoints: 0,
    nuyen: 0,
    essence: 6,
	metaType: MetaType.Human,
	priorities: {
		metaType: Priority.A,
		attributes: Priority.B,
		magic: Priority.C,
		skills: Priority.D,
		resources: Priority.E,
	},
	attributes: {
        [AttributeName.Body]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Agility]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Reaction]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Strength]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Willpower]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Logic]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Intuition]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Charisma]: {
            buildPoints: 0,
            increases: 0,
        },
        [AttributeName.Edge]: {
            buildPoints: 0,
            increases: 0,
        },
    },
    magicAttributes: {
        [MagicAttributeName.Magic]: { buildPoints: 0, increases: 0 },
        [MagicAttributeName.Resonance]: { buildPoints: 0, increases: 0 }
    },
    exceptionalAttribute: undefined,
    qualities: { negative: [], positive: [] },
    magic: {
        magicUserType: MagicUserType.None,
    },
    settings: {
        levelOfPlay: LevelOfPlayName.Normal,
    }
}