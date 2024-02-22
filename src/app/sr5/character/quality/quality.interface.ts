import {AttributeName, SpecialAttributeName } from "../interfaces/attribute.interface";

export type ExceptionalAttributeName = AttributeName.Body | AttributeName.Agility | AttributeName.Reaction | AttributeName.Strength | 
    AttributeName.Willpower | AttributeName.Logic | AttributeName.Intuition | AttributeName.Charisma | SpecialAttributeName.Magic | SpecialAttributeName.Resonance;

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
    id: string;
    name: string;
    karmaCost: number;
    ratingValue: number;
    maxRating: number;
    optionSelection: string;
    attribute?: AttributeName | SpecialAttributeName;
}