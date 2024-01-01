import { ExceptionalAttribute } from '../../common/constants';

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
    attribute?: ExceptionalAttribute;
}