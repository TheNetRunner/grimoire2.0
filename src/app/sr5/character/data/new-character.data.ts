import { Shadowrun5ECharacterData, RoleName } from "../interfaces/shadowrun-5e-character-data.interface";
import { MetaTypeName } from "../interfaces/meta-type.interface";
import { Priority } from "../priorities/priority.interface";
import { AttributeName, SpecialAttributeName } from "../interfaces/attribute.interface";
import { MagicUserType } from "../interfaces/magic.interface";
import { LevelOfPlayName } from "../interfaces/settings.interface";

export const characterObject: Shadowrun5ECharacterData = {
    id: "",
    version: "1.0.0",
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
	metaType: MetaTypeName.Human,
	priorities: {
		metaType: Priority.A,
		attributes: Priority.B,
		magic: Priority.C,
		skills: Priority.D,
		resources: Priority.E,
	},
	attributesData: {
        attributeBuildPoints: 20,
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
            }
        }
    },
    specialAttributesData: {
        specialAttributeBuildPoints: 9,
        specialAttributes: {
            [SpecialAttributeName.Edge]: {
                buildPoints: 0,
                increases: 0,
            },
            [SpecialAttributeName.Magic]: {
                buildPoints: 0,
                increases: 0,
            },
            [SpecialAttributeName.Resonance]: {
                buildPoints: 0,
                increases: 0,
            }
        }
    },
    exceptionalAttributes: [],
    qualities: { negative: [], positive: [] },
    magicData: {
        magicUserType: MagicUserType.None,
    },
    skillsData: {
        skillBuildPoints: 22,
        skillGroupBuildPoints: 0,
    },
    settingsData: {
        levelOfPlay: LevelOfPlayName.Normal,
    }
}