import { AttributeName, MagicAttributeName } from "../character/interfaces/attribute.interface";

export type ExceptionalAttribute = AttributeName | MagicAttributeName 

export const EDITOR_STEPS: string[] = [
    "concept", 
    "priorities", 
    "meta-type", 
    "qualities", 
    "attributes", 
    "magic", 
    "skills", 
    "augment", 
    "equipment"
];

export const EXCEPTIONAL_ATTRIBUTE_NAMES: ExceptionalAttribute[] = [
    AttributeName.Body, 
    AttributeName.Agility, 
    AttributeName.Reaction, 
    AttributeName.Strength, 
    AttributeName.Willpower,  
    AttributeName.Logic, 
    AttributeName.Intuition, 
    AttributeName.Charisma, 
    MagicAttributeName.Magic, 
    MagicAttributeName.Resonance
];