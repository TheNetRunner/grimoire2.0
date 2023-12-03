import {
	Component,
	EventEmitter,
	Input,
	Output,
	inject,
	OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Item, Currency } from "../../models/inventory.model";
import { GameSystemItemListModalComponent } from "../game-system-item-list-modal/game-system-item-list-modal.component";

@Component({
	selector: "app-add-inventory-item-modal",
	templateUrl: "./add-inventory-item-modal.component.html",
	styleUrl: "./add-inventory-item-modal.component.css",
})
export class AddInventoryItemModalComponent implements OnInit {
	private modalService = inject(NgbModal);
	activeModal = inject(NgbActiveModal);
	formBuilder = inject(FormBuilder);

	form!: FormGroup;
	currencyOptions: string[] = [];

	@Input() currencies!: Currency[];
	@Input() gameSystem!: string;
	@Output() addItemEvent = new EventEmitter<Item>();

	ngOnInit(): void {
		this.getGameSystemCurrecyOptions();
		this.generateForm();
	}

	generateForm(): void {
		this.form = this.formBuilder.group({
			name: [
				"",
				[
					Validators.required,
					Validators.maxLength(128),
					Validators.minLength(3),
				],
			],
			quantity: [1, [Validators.required]],
			amountPerItem: [0, [Validators.required]],
			currencyPerItem: [this.currencyOptions[0], [Validators.required]],
			notes: [""],
		});
	}

	getGameSystemCurrecyOptions(): void {
		for (const currency of this.currencies) {
			this.currencyOptions.push(currency.name);
		}
	}

	onSave(): void {
		const newItem = this.form.value;

		if (this.form.valid) {
			this.addItemEvent.emit(newItem);
			this.activeModal.close();
		}
	}

	openGameSystemItemListModal(): void {
		const modalRef = this.modalService.open(
			GameSystemItemListModalComponent,
			{
				size: "lg",
				scrollable: true,
			},
		);

		modalRef.componentInstance.gameSystem = this.gameSystem;
	}
}
