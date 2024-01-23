import { RosterData } from "./roster.interfaces";

export class Roster {
    private rosterData: RosterData;

    constructor(rosterData: RosterData) {
        this.rosterData = rosterData;
    }

    get id(): string {
        return this.rosterData.id;
    }

    get name(): string {
        return this.rosterData.name;
    }

    set name(name: string) {
        this.rosterData.name = name;
    }

    get faction(): string {
        return this.rosterData.faction;
    }

    set faction(faction: string) {
        this.rosterData.faction = faction;
    }

    get lastUpdated(): number {
        return this.rosterData.lastUpdated;
    }

    set lastUpdated(lastUpdated: number) {
        this.rosterData.lastUpdated = lastUpdated;
    }
}