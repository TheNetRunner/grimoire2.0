import {
	Component,
	Input,
	Output,
	EventEmitter,
	inject,
	OnInit,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { Currency } from "../../models/inventory.model";

@Component({
	selector: "app-update-currency-modal",
	templateUrl: "./update-currency-modal.component.html",
	styleUrl: "./update-currency-modal.component.css",
})
export class UpdateCurrencyModalComponent implements OnInit {
	activeModal = inject(NgbActiveModal);
	formBuilder = inject(FormBuilder);

	form!: FormGroup;

	@Input() currency!: Currency;
	@Output() updateCurrencyEvent = new EventEmitter<Currency>();

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			amount: [1, [Validators.required, Validators.min(1)]],
		});
	}

	onSubtraction(): void {
		const n = this.form.get("amount")?.value;

		if (n && this.form.valid) {
			this.currency.amount = this.currency.amount - n;
			this.emitCurrencyChangeEvent();
		}
	}

	onAddition(): void {
		const n = this.form.get("amount")?.value;

		if (n && this.form.valid) {
			this.currency.amount = this.currency.amount + n;
			this.emitCurrencyChangeEvent();
		}
	}

	emitCurrencyChangeEvent(): void {
		this.updateCurrencyEvent.emit(this.currency);
	}

	get isAmountValid(): boolean | undefined {
		return this.form.get("amount")?.valid;
	}

	get hasAmountBeenTouched(): boolean | undefined {
		return this.form.get("amount")?.touched;
	}

	get amountValue(): number | undefined {
		return this.form.get("amount")?.value;
	}
}
