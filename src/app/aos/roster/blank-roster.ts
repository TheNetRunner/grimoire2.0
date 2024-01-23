import { RosterData } from "./roster.interfaces"

export const blankRoster: RosterData = {
    id: "",
    name: "New Roster",
    faction: "cities of sigmar",
    realmOfOrigin: "",
    armyName: "",
    subFaction: "",
    startingSize: 600,
    created: Date.now(),
    lastUpdated: Date.now(),
}