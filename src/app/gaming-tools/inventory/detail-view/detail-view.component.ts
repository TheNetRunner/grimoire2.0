import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { Currency, Inventory } from "../../inventory/models/inventory.model";
import { InventoryService } from "../../inventory/services/inventory.service";
import { UpdateCurrencyModalComponent } from "../components/update-currency-modal/update-currency-modal.component";
import { EditInventoryItemModalComponent } from "../components/edit-inventory-item-modal/edit-inventory-item-modal.component";
import { Item } from "../../inventory/models/inventory.model";
import { AddInventoryItemModalComponent } from "../components/add-inventory-item-modal/add-inventory-item-modal.component";
import { FormBuilder, FormGroup } from "@angular/forms";

const modalOptions = {
	keyboard: true,
	animation: true,
	centered: true,
	size: "lg",
};

@Component({
	selector: "app-detail-view",
	templateUrl: "./detail-view.component.html",
	styleUrl: "./detail-view.component.css",
})
export class DetailViewComponent implements OnInit {
    activedRoute = inject(ActivatedRoute);
    formBuilder = inject(FormBuilder);
    inventoryService = inject(InventoryService);
	modalService = inject(NgbModal);
	router = inject(Router);

	inventoryId: string = "";
	inventory!: Inventory;
    form!: FormGroup;
    notesCollapsed: boolean = false;
    detailsCollapsed: boolean = true;

	ngOnInit() {
		this.activedRoute.params.subscribe((params) => {
			this.inventoryId = params["id"];

			if (this.inventoryId) {
				this.inventoryService
					.getInventory(this.inventoryId)
					.subscribe((inventory) => {
						if (inventory) {
							this.inventory = inventory;
                            this.generateForm();
						} else {
							this.router.navigate([
								"gaming-tools",
								"inventories",
							]);
						}
					});
			}
		});
	}

    generateForm(): void {
        this.form = this.formBuilder.group({
            notes: [this.inventory.notes]
        });

        this.form.valueChanges.subscribe((valueChange) => {
            this.inventory.notes = valueChange.notes;
            this.updateInventoryDatabaseEntry();
        });
    }

	openUpdateCurrecyModal(currency: Currency): void {
		const modalRef = this.modalService.open(
			UpdateCurrencyModalComponent,
			modalOptions,
		);

		modalRef.componentInstance.currency = currency;

		modalRef.componentInstance.updateCurrencyEvent.subscribe(
			(updatedCurrency: Currency) => {
				const currencyIndex = this.getCurrencyIndex(
					updatedCurrency.name,
				);

				if (currencyIndex !== -1) {
					this.inventory.currencies[currencyIndex] = updatedCurrency;
					this.updateInventoryDatabaseEntry();
				}
			},
		);
	}

	private getCurrencyIndex(currencyName: string): number {
		return this.inventory.currencies.findIndex(
			(currency) => currency.name === currencyName,
		);
	}

	openItemEditModal(item: Item): void {
		const modalRef = this.modalService.open(
			EditInventoryItemModalComponent,
			modalOptions,
		);

		modalRef.componentInstance.item = item;
		modalRef.componentInstance.currencies = this.inventory.currencies;

		modalRef.componentInstance.updateItemEvent.subscribe(
			(updatedItem: Item) => {
				this.updateItemInItemsArray(updatedItem);
			},
		);

		modalRef.componentInstance.deleteItemEvent.subscribe(
			(itemId: string) => {
				this.deleteItemFromItemsArray(itemId);
			},
		);
	}

	openAddItemModal(): void {
		const modalRef = this.modalService.open(
			AddInventoryItemModalComponent,
			modalOptions,
		);

		modalRef.componentInstance.currencies = this.inventory.currencies;
		modalRef.componentInstance.gameSystem = this.inventory.gameSystem;

		modalRef.componentInstance.addItemEvent.subscribe((item: Item) => {
            item.id = this.generateItemId();
			this.inventory.items.push(item);
			this.updateInventoryDatabaseEntry();
		});
	}

    private generateItemId(): string {
		let newId: string;

		do {
			newId = uuidv4();
		} while (
			this.inventory.items.some(item => item.id === newId)
		);

		return newId;
    }

	private updateItemInItemsArray(updatedItem: Item): void {
		const itemIndex = this.getItemIndex(updatedItem.id);

		if (itemIndex !== -1) {
			this.inventory.items[itemIndex] = updatedItem;
			this.updateInventoryDatabaseEntry();
		}
	}

	private deleteItemFromItemsArray(itemId: string): void {
		const indexToUpdate = this.inventory.items.findIndex(
			(item) => item.id === itemId,
		);

		if (indexToUpdate !== -1) {
			this.inventory.items.splice(indexToUpdate, 1);
			this.updateInventoryDatabaseEntry();
		}
	}

	private getItemIndex(itemId: string): number {
		return this.inventory.items.findIndex((item) => item.id === itemId);
	}

	private updateInventoryDatabaseEntry(): void {
		const now = Date.now();
		this.inventory.lastUpdated = now;
		this.inventoryService.updateInventoryItemInDatabase(this.inventory);
	}

	downloadInventory(): void {
		const now = new Date();
		const formattedDate = now.toISOString();

		const inventoryAsJSONString = JSON.stringify(this.inventory, null, 4);
		const blob = new Blob([inventoryAsJSONString], {
			type: "application/json",
		});

		const downloadLink = document.createElement("a");
		downloadLink.href = window.URL.createObjectURL(blob);
		downloadLink.download = `${this.inventory.name}_${formattedDate}.json`;

		document.body.appendChild(downloadLink);

		downloadLink.click();

		document.body.removeChild(downloadLink);
	}
}
