import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Item } from "../../models/inventory.model";

@Component({
	selector: "app-inventory-item-list-item",
	templateUrl: "./inventory-item-list-item.component.html",
	styleUrl: "./inventory-item-list-item.component.css",
})
export class InventoryItemListItemComponent {
	@Input() item!: Item;
	@Output() openItemEditModalEvent = new EventEmitter();

	notesCollapsed: boolean = true;

	emitOpenItemEditModalEvent(): void {
		this.openItemEditModalEvent.emit();
	}
}
