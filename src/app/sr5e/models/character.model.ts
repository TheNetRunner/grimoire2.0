import { Attribute, Attributes, SpecialAttributes } from './attribute.model';
import { MagicUserType } from './magic.model';
import { MetaTypeName } from './meta-types.model';
import { LevelOfPlay, Priority } from './priority-table.model';
import { Spell } from './magic.model';

export interface ShadowRun5ECharacter {
	id: string;
    name: string;
    role: string;
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
	levelOfPlay: LevelOfPlay;
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
		positive: string[];
		negative: string[];
		attribute: string;
	};
    magic: {
        attribute: Attribute;
        magicalSkills: string[];
        spells: Spell[];
    }
    resonance: {
        attribute: Attribute;
        resonanceSkills: string[];
        complexForms: string[];
    }
}


