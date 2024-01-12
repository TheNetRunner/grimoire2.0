import { Injectable, inject } from "@angular/core";
import { Observable, liveQuery } from "dexie";
import { v4 as uuidv4 } from "uuid";
import Joi from "joi";

import {
	Currency,
	Inventory,
	inventorySchema,
} from "../models/inventory.model";
import { NewInventoryConfig } from "../components/add-inventory-modal/add-inventory-modal.component";
import {
	dungeonsAndDragonsCurrencies,
	shadowRunCurrencies,
	earthDawnCurrencies,
} from "../data/currencies.data";
import { DatabaseService } from "../../../shared/services/database.service";

const INVENTORY_TABLE_NAME = "inventories";

@Injectable({
	providedIn: "root",
})
export class InventoryService {
    databaseService = inject(DatabaseService);

	async createNewInventory(
		newInventoryConfig: NewInventoryConfig,
	): Promise<Inventory> {
		const now = Date.now();
		const gameSystem = newInventoryConfig.gameSystem;

		return {
			id: await this.getUniqueInventoryId(),
			name: newInventoryConfig.name,
			gameSystem: gameSystem,
			items: [],
			currencies: this.generateCurrencyObject(gameSystem),
			created: now,
			lastUpdated: now,
			notes: "",
		};
	}

	getInventories(): Observable<Inventory[]> {
		return liveQuery(() => this.databaseService.getItems(INVENTORY_TABLE_NAME));
	}

	getInventory(id: string): Observable<Inventory | undefined> {
		return liveQuery(() => this.databaseService.getItemById(INVENTORY_TABLE_NAME, id));
	}

	saveInventoryToDatabase(inventory: Inventory): void {
		this.databaseService.addItem(INVENTORY_TABLE_NAME, inventory, inventory.id);
	}

	updateInventoryItemInDatabase(inventory: Inventory): void {
		this.databaseService.updateItem(INVENTORY_TABLE_NAME, inventory.id, inventory);
	}

	deleteInventoryItemInDatabase(inventoryId: string): void {
		this.databaseService.deleteItem(INVENTORY_TABLE_NAME, inventoryId);
	}

	validateInventoryJson(inventoryObject: Inventory): boolean {
		let isValid = false;
		const inventoryObjectStructureResult = inventorySchema.validate(inventoryObject)
		const areCurrenciesValid =
			this.validateGameSystemCurrencies(inventoryObject);

		if (!inventoryObjectStructureResult.error && areCurrenciesValid) {
            console.log("Contents valid!");
			isValid = true;
		}

		return isValid;
	}

	private validateGameSystemCurrencies(
		userProvidedInventoryObject: Inventory,
	): boolean {
		const gameSystemCurrencies = this.generateCurrencyObject(
			userProvidedInventoryObject.gameSystem,
		);

		if (gameSystemCurrencies.length > 0) {
			const userProvidedCurrencyNames =
				userProvidedInventoryObject.currencies.map(
					(currency) => currency.name,
				);
			const gameSystemCurrencyNames = gameSystemCurrencies.map(
				(currency) => currency.name,
			);

			const schema = Joi.array().items(
				Joi.string().valid(...gameSystemCurrencyNames),
			);

			if (schema.validate(userProvidedCurrencyNames)) {
				return true;
			}
		}

		return false;
	}

	private generateCurrencyObject(gameSystem: string): Currency[] {
		switch (gameSystem) {
			case "earth dawn":
				return earthDawnCurrencies;
			case "shadow run":
				return shadowRunCurrencies;
			case "dungeons & dragons":
				return dungeonsAndDragonsCurrencies;
			default:
				return [];
		}
	}

	async getUniqueInventoryId(): Promise<string> {
		let newId: string;

		do {
			newId = uuidv4().slice(-12)
		} while (
			await this.databaseService.verifyIdExistsInTable(INVENTORY_TABLE_NAME, newId)
		);

		return newId;
	}
}
