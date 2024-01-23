import { CommLink } from '../interfaces/cyberware.interface';

export const commslinks: CommLink[] = [
    {
        name: "meta link",
        cost: 100,
        availability: 2,
        capacity: 0,
        deviceRating: 1,
        source: "CRB:438",
        wirelessCapable: true,
    },
    {
        name: "sony emperor",
        cost: 200,
        availability: 4,
        capacity: 0,
        deviceRating: 2,
        source: "CRB:438",
        wirelessCapable: true,
    },
    {
        name: "erika elite",
        cost: 2500,
        availability: 8,
        capacity: 2,
        deviceRating: 4,
        source: "CRB:438",
        wirelessCapable: true,
    }
]