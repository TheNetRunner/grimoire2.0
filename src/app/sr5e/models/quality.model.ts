import { AttributeName } from './attribute.model';

export interface Quality {
    name: string;
    description: string;
    karmaCost: number;
    source: string;
    maxRating: number;
}

export interface QualityReference {
    name: string;
    attribute?: AttributeName;
    ratingValue?: number;
}