import { Injectable } from '@angular/core';
import Dexie from "dexie";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
    private database: Dexie;

	constructor() {
		this.database = new Dexie("Grimoire");
		this.database.version(3).stores({
			inventories: "&id",
            shadowRun5ECharacters: "&id",
            tanksForTheApocalypse: "&id",
            aosPathToGloryRosters: "&id"
		});
	}

	async addItem(tableName: string, item: any, key: string): Promise<void> {
		await this.database.table(tableName).add(item, key);
	}

	async getItems(tableName: string): Promise<any[]> {
		return await this.database.table(tableName).toArray();
	}

	async getItemById(tableName: string, id: string): Promise<any> {
		return await this.database.table(tableName).where("id").equals(id).first();
	}

	async updateItem(tableName: string, id: string, update: any): Promise<number> {
		const response = await this.database.table(tableName).update(id, update);
		return response;
	}

	async deleteItem(tableName: string, id: string): Promise<void> {
		return await this.database.table(tableName).delete(id);
	}

	async verifyIdExistsInTable(tableName: string, id: string): Promise<boolean> {
		const keyItem = await this.database.table(tableName)
			.where("id")
			.equals(id)
			.first();

		if (keyItem) {
			return true;
		} else {
			return false;
		}
	}
}
