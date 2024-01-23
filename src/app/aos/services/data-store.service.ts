import { Injectable, inject } from '@angular/core';
import { Observable, liveQuery } from "dexie";
import { v4 as uuidv4 } from "uuid";

import { DatabaseService } from '../../shared/services/database.service';
import { RosterData } from '../roster/roster.interfaces';
import { blankRoster } from '../roster/blank-roster';

const AOS_ROSTER_TABLE_NAME = "aosPathToGloryRosters";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
    databaseService = inject(DatabaseService);

    // Create
    async createRoster(): Promise<string> {
        const newId = await this.generateId();
        const newRoster = {...blankRoster, id: newId}

        this.addRosterToDatabase(newRoster);

        return newId;
    }

    async copyRoster(rosterCopyData: RosterData): Promise<string> {
        const newId = await this.generateId();
        const newRoster = {
            ...rosterCopyData, 
            id: newId, 
            name: `${rosterCopyData.name} (Copy)`
        }

        this.addRosterToDatabase(newRoster);

        return newId;
    }

    async addRosterToDatabase(roster: RosterData): Promise<void> {
        this.databaseService.addItem(AOS_ROSTER_TABLE_NAME, roster, roster.id);
    }

    // Read
    getRosters(): Observable<RosterData[]> {
        return liveQuery(() => this.databaseService.getItems(AOS_ROSTER_TABLE_NAME));
    }

    getRoster(id: string): Observable<RosterData> {
        return liveQuery(() => this.databaseService.getItemById(AOS_ROSTER_TABLE_NAME, id))
    }

    // Update
    updateRoster(rosterId: string, rosterUpdates: any): void {
        this.databaseService.updateItem(AOS_ROSTER_TABLE_NAME, rosterId, rosterUpdates);
    }

    // Delete
    deleteRoster(rosterId: string): void { 
        this.databaseService.deleteItem(AOS_ROSTER_TABLE_NAME, rosterId);
    }

    private async generateId(): Promise<string> {
        let newId: string;
        let doesIdExist = true;

        do {
            newId = uuidv4().slice(-12);
            doesIdExist = await this.databaseService.verifyIdExistsInTable(AOS_ROSTER_TABLE_NAME, newId);
        } while (doesIdExist);

        return newId;
    }
}
