import { AttributeName } from './attribute.model';

export interface Quality {
    name: string;
    description: string;
    karmaCost: number;
    source: string;
    attribute?: AttributeName;
    rating?: number;
}