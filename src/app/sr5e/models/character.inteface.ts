export interface Attribute {
	buildPoints: number;
	increases: number;
}

export enum AttributeNames {
    body = "body",
    agility = "agility",
    reaction = "reaction",
    strength = "strength",
    willPower = "willPower",
    logic = "logic",
    intuition = "intuition",
    charisma = "charisma",
    edge = "edge",
    magicResonance = "magicResonance"
}

export interface ShadowRun5ECharacter {
	id: string;
    name: string;
    role: string;
    ethnicity: string;
    age: string;
    gender: string;
    eyes: string;
    hair: string;
    height: string;
    weight: string;
    misc: string;
    streetCred: string;
    notoriety: string;
    publicAwareness: string;
	levelOfPlay: string;
	totalKarma: number;
    startingKarma: number;
	bio: string;
	metaType: string;
	priorities: {
		metaType: string;
		attributes: string;
		magicResonance: string;
		skills: string;
		resources: string;
	};
	attributes: {
        [key in AttributeNames]: Attribute;
	};
	qualities: {
		positive: string[];
		negative: string[];
		attribute: string;
	};
}


