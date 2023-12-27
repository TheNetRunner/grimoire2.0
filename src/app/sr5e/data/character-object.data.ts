import { ShadowRun5ECharacterData, RoleName } from '../models/character.interface';
import { Attribute, MagicAttribute } from '../models/attribute.interface';
import { Priority } from '../models/priority.interface';
import { MetaType } from '../models/meta-type.model';
import { MagicUserType } from '../models/magic.interface';
import { LevelOfPlay } from '../models/settings.interface';

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
    imageName: "human_one",
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
        [Attribute.Body]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Agility]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Reaction]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Strength]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.WillPower]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Logic]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Intuition]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Charisma]: {
            racialBaseValue: 1,
            racialMaxValue: 6,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
        [Attribute.Edge]: {
            racialBaseValue: 2,
            racialMaxValue: 7,
            buildPoints: 0,
            increases: 0,
            exceptional: false,
        },
    },
    qualities: { negative: [], positive: [] },
    magic: {
        magicUserType: MagicUserType.None,
        attributes: {
            [MagicAttribute.Magic]: {
                buildPoints: 0,
                increases: 0,
                exceptional: false,
            },
            [MagicAttribute.Resonance]: {
                buildPoints: 0,
                increases: 0,
                exceptional: false,
            },
        }
    },
    settings: {
        levelOfPlay: LevelOfPlay.Normal,
    }
}