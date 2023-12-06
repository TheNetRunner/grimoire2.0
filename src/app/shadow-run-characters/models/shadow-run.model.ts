export interface ShadowRunCharacter {
    id: string;
    name: string;
    metaType: "human" | "elf" | "dwarf" | "ork" | "troll";
    ethnicity: string;
    age: string;
    gender: string;
    height: string;
    weight: string;
    streetCred: string;
    notoriety: string;
    publicAwareness: string;
    misc: string;
    karmaEarned: number
}