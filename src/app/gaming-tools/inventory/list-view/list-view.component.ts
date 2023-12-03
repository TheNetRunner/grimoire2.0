import { Component, OnInit, inject } from "@angular/core";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

import { Inventory } from "../../inventory/models/inventory.model";
import { InventoryService } from "../../inventory/services/inventory.service";
import { AddInventoryModalComponent } from "../components/add-inventory-modal/add-inventory-modal.component";
import { NewInventoryConfig } from "../components/add-inventory-modal/add-inventory-modal.component";
import { DeleteInventoryModalComponent } from "../components/delete-inventory-modal/delete-inventory-modal.component";
import { UploadInventoryModalComponent } from "../components/upload-inventory-modal/upload-inventory-modal.component";

const modalOptions: NgbModalOptions = {
	keyboard: true,
	animation: true,
	centered: true,
	size: "lg",
};

@Component({
	selector: "app-list-view",
	templateUrl: "./list-view.component.html",
	styleUrl: "./list-view.component.css",
})
export class ListViewComponent implements OnInit {
	inventoryService = inject(InventoryService);
	modalService = inject(NgbModal);

	inventories: Inventory[] = [];

	ngOnInit(): void {
		this.getInventoriesFromDatabase();
	}

	getInventoriesFromDatabase(): void {
		this.inventoryService.getInventories().subscribe((inventories) => {
			this.inventories = inventories;
		});
	}

	openNewInventoryModal(): void {
		const modalRef = this.modalService.open(
			AddInventoryModalComponent,
			modalOptions,
		);

		modalRef.componentInstance.createInventoryEvent.subscribe(
			(newInventoryConfig: NewInventoryConfig) => {
				console.log(newInventoryConfig);
				this.addNewInventory(newInventoryConfig);
			},
		);
	}

	openDeleteInventoryModal(inventory: Inventory): void {
		const modalRef = this.modalService.open(
			DeleteInventoryModalComponent,
			modalOptions,
		);

		modalRef.componentInstance.inventory = inventory;

		modalRef.componentInstance.deleteInventoryEvent.subscribe(() => {
			this.deleteInventory(inventory.id);
		});
	}

	async addNewInventory(
		newInventoryConfig: NewInventoryConfig,
	): Promise<void> {
		if (this.inventories.length < 25) {
			const newInventory =
				await this.inventoryService.createNewInventory(
					newInventoryConfig,
				);
			this.inventoryService.saveInventoryToDatabase(newInventory);
		}
	}

	deleteInventory(inventoryId: string): void {
		this.inventoryService.deleteInventoryItemInDatabase(inventoryId);
	}

	openUploadInventoryModal(): void {
		const modalRef = this.modalService.open(
			UploadInventoryModalComponent,
			modalOptions,
		);

		modalRef.componentInstance.uploadInventoryEvent.subscribe(
			async (uploadedInventory: Inventory) => {
                console.log("uploading inventory...", uploadedInventory);
                const now = Date.now();
                console.log("Updating lasy updated field to..", now)

                uploadedInventory.id = await this.inventoryService.getUniqueInventoryId();
                uploadedInventory.lastUpdated = now;
                
                this.inventoryService.saveInventoryToDatabase(uploadedInventory);
            },
		);
	}
}
