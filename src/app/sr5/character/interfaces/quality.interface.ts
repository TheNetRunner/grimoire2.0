import { AttributeName, MagicAttributeName } from './attribute.interface';

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
    attribute?: AttributeName | MagicAttributeName;
}