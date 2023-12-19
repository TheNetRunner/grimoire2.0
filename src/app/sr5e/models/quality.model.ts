import { AttributeName } from './attribute.model';

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
    attribute?: AttributeName;
    ratingValue?: number;
    optionSelection?: string;
}