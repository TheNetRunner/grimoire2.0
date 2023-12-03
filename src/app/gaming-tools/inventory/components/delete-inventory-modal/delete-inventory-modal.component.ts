import { Component, inject, Input, Output, EventEmitter } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Inventory } from "../../models/inventory.model";

@Component({
	selector: "app-delete-inventory-modal",
	templateUrl: "./delete-inventory-modal.component.html",
	styleUrl: "./delete-inventory-modal.component.css",
})
export class DeleteInventoryModalComponent {
	activeModal = inject(NgbActiveModal);

	@Input() inventory!: Inventory;
	@Output() deleteInventoryEvent = new EventEmitter<string>();

	onDelete(): void {
		this.deleteInventoryEvent.emit();
		this.activeModal.close();
	}
}
