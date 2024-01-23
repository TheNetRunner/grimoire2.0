export interface Program {
    name: string;
    cost: number;
    availability: number;
    rarerity: string;
    description: string;
}

export interface CommLink {
    name: string;
    cost: number;
    availability: number;
    capacity: number;
    deviceRating: number;
    source: string;
    wirelessCapable: boolean;
}