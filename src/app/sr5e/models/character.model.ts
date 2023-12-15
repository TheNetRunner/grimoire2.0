import { Attribute, Attributes, SpecialAttributes } from './attribute.model';
import { MagicUserType, MysticAdept, AspectedMagician, Magician, Technomancer, Adept, } from './magic.model';
import { MetaTypeName } from './meta-types.model';
import { LevelOfPlayName, Priority } from './priority-table.model';
import { Spell } from './magic.model';
import { Quality } from './quality.model';

export enum RoleName { 
    DECKER = 'decker',
    FACE = 'face',
    SPELL_CASTER = 'spellcaster',
    ADEPT = 'adept',
    RIGGER = 'rigger',
    SAMURAI = 'samurai',
    STREET_SAMURAI = 'street Samurai',
    TECHNOMANCER = 'technomancer'
}

export interface ShadowRun5ECharacter {
	id: string;
    name: string;
    role: RoleName;
    magicUserType: MagicUserType;
    ethnicity: string;
    age: string;
    gender: string;
    eyes: string;
    hair: string;
    height: string;
    weight: string;
    misc: string;
    image: string;
    streetCred: string;
    notoriety: string;
    publicAwareness: string;
	levelOfPlay: LevelOfPlayName;
	totalKarma: number;
    startingKarma: number;
    nuyen: number;
	bio: string;
	metaType: MetaTypeName;
	priorities: {
		metaType: Priority;
		attributes: Priority;
		magicResonance: Priority;
		skills: Priority;
		resources: Priority;
	};
	attributes: Attributes;
    specialAttributes: SpecialAttributes;
	qualities: {
		positive: Quality[];
		negative: Quality[];
	};
    magic?: Magician | MysticAdept | AspectedMagician | Technomancer | Adept;
}


