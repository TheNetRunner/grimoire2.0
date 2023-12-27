import { Attribute, MagicAttribute } from "../models/attribute.interface";

type ExceptioanlAttributeOptions = Attribute | MagicAttribute;

export const IMAGE_SUFFEX: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
export const PHYSICAL_LIMIT_TEXT: string = "[(Str * 2) + Bod + Rea] / 3";
export const MENTAL_LIMIT_TEXT: string = "[(Log * 2) + Wil + Int] / 3";
export const SOCIAL_LIMIT_TEXT: string = "[(Cha * 2) + Wil + Ess] / 3";
export const EDITOR_STEPS: string[] = ["concept", "priorities", "meta-type", "qualities", "attributes", "magic", "skills", "augment", "equipment"];
export const EXCEPTIOANL_ATTRIBUTE_OPTIONS: ExceptioanlAttributeOptions[] = [
    Attribute.Body, 
    Attribute.Agility, 
    Attribute.Reaction, 
    Attribute.Strength, 
    Attribute.WillPower, 
    Attribute.Logic, 
    Attribute.Intuition, 
    Attribute.Charisma,
    MagicAttribute.Magic,
    MagicAttribute.Resonance
];