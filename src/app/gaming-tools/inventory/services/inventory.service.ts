import { Injectable, inject } from "@angular/core";
import { Observable, liveQuery } from "dexie";
import { v4 as uuidv4 } from "uuid";
import Joi from "joi";

import { InventoryDatabaseService } from "./inventory-database.service";
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

@Injectable({
	providedIn: "root",
})
export class InventoryService {
	inventoryDatabaseService = inject(InventoryDatabaseService);

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
		return liveQuery(() => this.inventoryDatabaseService.getItems());
	}

	getInventory(id: string): Observable<Inventory | undefined> {
		return liveQuery(() => this.inventoryDatabaseService.getItemById(id));
	}

	saveInventoryToDatabase(inventory: Inventory): void {
		this.inventoryDatabaseService.addItem(inventory, inventory.id);
	}

	updateInventoryItemInDatabase(inventory: Inventory): void {
		this.inventoryDatabaseService.updateItem(inventory.id, inventory);
	}

	deleteInventoryItemInDatabase(inventoryId: string): void {
		this.inventoryDatabaseService.deleteItem(inventoryId);
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
			case "dnd":
				return dungeonsAndDragonsCurrencies;
			default:
				return [];
		}
	}

	async getUniqueInventoryId(): Promise<string> {
		let newId: string;

		do {
			newId = uuidv4();
		} while (
			await this.inventoryDatabaseService.verifyIdExistsInTable(newId)
		);

		return newId;
	}
}
