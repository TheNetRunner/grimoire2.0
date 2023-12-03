import {
	Component,
	EventEmitter,
	Input,
	Output,
	inject,
	OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Currency, Item } from "../../models/inventory.model";

@Component({
	selector: "app-edit-inventory-item-modal",
	templateUrl: "./edit-inventory-item-modal.component.html",
	styleUrl: "./edit-inventory-item-modal.component.css",
})
export class EditInventoryItemModalComponent implements OnInit {
	activeModal = inject(NgbActiveModal);
	formBuilder = inject(FormBuilder);
	form!: FormGroup;
	currencyOptions: string[] = [];

	@Input() item!: Item;
	@Input() currencies!: Currency[];
	@Output() updateItemEvent = new EventEmitter<Item>();
	@Output() deleteItemEvent = new EventEmitter<string>();

	ngOnInit(): void {
		this.generateForm();
		this.getGameSystemCurrecyOptions();
	}

	generateForm(): void {
		this.form = this.formBuilder.group({
			id: [this.item.id, [Validators.required]],
			name: [
				this.item.name,
				[Validators.required, Validators.minLength(3)],
			],
			quantity: [
				this.item.quantity,
				[Validators.required, Validators.min(0)],
			],
			amountPerItem: [
				this.item.amountPerItem,
				[Validators.required, Validators.min(0)],
			],
			currencyPerItem: [this.item.currencyPerItem, [Validators.required]],
			notes: [this.item.notes],
		});
	}

	getGameSystemCurrecyOptions(): void {
		for (const currency of this.currencies) {
			this.currencyOptions.push(currency.name);
		}
	}

	onSave(): void {
		const updatedItem = this.form.value;
		this.updateItemEvent.emit(updatedItem);
		this.activeModal.close();
	}

	onDelete(): void {
		this.deleteItemEvent.emit(this.item.id);
		this.activeModal.close();
	}
}
