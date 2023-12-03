import { Injectable } from "@angular/core";
import Dexie, { Table } from "dexie";

import { Inventory } from "../models/inventory.model";

const INVENTORY_TABLE_NAME = "inventories";

@Injectable({
	providedIn: "root",
})
export class InventoryDatabaseService extends Dexie {
	private inventoriesTable!: Table<Inventory, string>;

	constructor() {
		super("GrimoireInventories");
		this.version(1).stores({
			inventories: "&id",
		});

		this.inventoriesTable = this.table(INVENTORY_TABLE_NAME);
	}

	async addItem(item: Inventory, key: string): Promise<void> {
		await this.inventoriesTable.add(item, key);
	}

	async getItems(): Promise<Inventory[]> {
		return await this.inventoriesTable.toArray();
	}

	async getItemById(id: string): Promise<Inventory | undefined> {
		return await this.inventoriesTable.where("id").equals(id).first();
	}

	async updateItem(key: string, update: Inventory): Promise<number> {
		const response = await this.inventoriesTable.update(key, update);
		return response;
	}

	async deleteItem(key: string): Promise<void> {
		return await this.inventoriesTable.delete(key);
	}

	async verifyIdExistsInTable(id: string): Promise<boolean> {
		const keyItem = await this.inventoriesTable
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
