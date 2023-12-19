export interface IAttribute {
    name: AttributeName;
    baseValue: number;
    buildPoints: number;
    increases: number;
    exceptional: boolean;
}

export interface IShadowRun5ECharacter {
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
	attributes: {
        body: IAttribute;
        agility: IAttribute;
        reaction: IAttribute;
        strength: IAttribute;
        willPower: IAttribute;
        logic: IAttribute;
        intuition: IAttribute;
        charisma: IAttribute;
        edge: IAttribute;
        magic: IAttribute;
        resonance: IAttribute;
    }
	qualities: QualityReference[];
    magic?: Magician | MysticAdept | AspectedMagician | Technomancer | Adept;
}


