import { Component, Output, EventEmitter, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

export interface NewInventoryConfig {
	name: string;
	gameSystem: string;
}

@Component({
	selector: "app-add-inventory-modal",
	templateUrl: "./add-inventory-modal.component.html",
	styleUrl: "./add-inventory-modal.component.css",
})
export class AddInventoryModalComponent implements OnInit {
	activeModal = inject(NgbActiveModal);
	formBuilder = inject(FormBuilder);

	form!: FormGroup;

	@Output() createInventoryEvent = new EventEmitter<NewInventoryConfig>();

	ngOnInit(): void {
		this.generateForm();
	}

	generateForm(): void {
		this.form = this.formBuilder.group({
			name: [
				"",
				[
					Validators.required,
					Validators.maxLength(64),
					Validators.minLength(3),
				],
			],
			gameSystem: ["earth dawn", [Validators.required]],
		});
	}

	onCreate(): void {
		console.log(this.form.value);

		if (this.form.valid) {
			this.createInventoryEvent.emit({
				name: this.name,
				gameSystem: this.gameSystem,
			});

			this.activeModal.close();
		}
	}

	get name(): string {
		return this.form.get("name")?.value;
	}

	get gameSystem(): string {
		return this.form.get("gameSystem")?.value;
	}

	get isNameValid(): boolean | undefined {
		return this.form.get("name")?.valid;
	}

	get hasNameBeenTouched(): boolean | undefined {
		return this.form.get("name")?.touched;
	}

	get isGameSystemValid(): boolean | undefined {
		return this.form.get("gameSystem")?.valid;
	}

	get hasGameBeenTouched(): boolean | undefined {
		return this.form.get("gameSystem")?.touched;
	}
}
