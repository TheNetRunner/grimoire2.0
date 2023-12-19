export enum LevelOfPlay {
    Street = 'street',
    Normal = 'normal',
    Prime = 'prime'
}

export enum RoleName { 
    Decker = 'decker',
    Face = 'face',
    Spellcaster = 'spellcaster',
    Adept = 'adept',
    Rigger = 'rigger',
    Samurai = 'samurai',
    StreetSamurai = 'street Samurai',
    Technomancer = 'technomancer'
}

export enum MagicUserType {
    None = "",
    Adept = "adept",
    AspectedMagician = "aspected magician",
    Magician = "magician",
    MysticAdept = "mystic adept",
    Technomancer = "technomancer",
}

export enum Priority {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
}

export enum MetaType {
    Human = "human",
    Dwarf = "dwarf",
    Elf = "elf",
    Ork = "ork",
    Troll = "troll",
}

export enum Attribute {
    Body = "body",
    Agility = "agility",
    Reaction = "reaction",
    Strength = "strength",
    Willpower = "willpower",
    Logic = "logic",
    Intuition = "intuition",
    Charisma = "charisma",
    Edge = "edge",
    Magic = "magic",
    Resonance = "resonance",
}

export interface BasicInformation {
    name: string;
    role: RoleName;
    ethnicity: string;
    age: string;
    gender: string;
    eyes: string;
    hair: string;
    height: string;
    weight: string;
    streetCred: string;
    notoriety: string;
    publicAwareness: string;
    misc: string;
    bio: string;
}

export interface Priorities {
    metaType: Priority;
    attributes: Priority;
    skills: Priority;
    resources: Priority;
    magic: Priority;
}

export interface AttributeData {
    buildPoints: number;
    increases: number;
    exceptional: boolean;
}

export interface Quality {
    name: string;
    type: "negative" | "positive";
    description: string;
    karmaCost: number;
    source: string;
    maxRating: number;
    options?: QualityOption[];
}

export interface QualityOption {
    name: string;
    description: string;
}

export interface QualityReference {
    name: string;
    attribute?: Attribute;
    ratingValue?: number;
    optionSelection?: string;
}

export interface ShadowRun5ECharacterData {
    id: string;
    basic: BasicInformation;
    image: string;
    priorities: Priorities;
    attributes: {
        [Attribute.Body]: AttributeData;
        [Attribute.Agility]: AttributeData;
        [Attribute.Reaction]: AttributeData;
        [Attribute.Strength]: AttributeData;
        [Attribute.Willpower]: AttributeData;
        [Attribute.Logic]: AttributeData;
        [Attribute.Intuition]: AttributeData;
        [Attribute.Charisma]: AttributeData;
        [Attribute.Edge]: AttributeData;
        [Attribute.Magic]: AttributeData;
        [Attribute.Resonance]: AttributeData;
    }
    metaType: MetaType;
    karmaPoints: number;
    nuyen: number;
    qualities: {
        positive: QualityReference[];
        negative: QualityReference[];
    },
    magic: {
        magicUserType: MagicUserType;
    },
    settings: {
        levelOfPlay: LevelOfPlay;
    }
}