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

const currencyValidators = [Validators.required, Validators.min(0), Validators.max(999999999)];

@Component({
	selector: "app-update-currency-modal",
	templateUrl: "./update-currency-modal.component.html",
	styleUrl: "./update-currency-modal.component.css",
})
export class UpdateCurrencyModalComponent implements OnInit {
	activeModal = inject(NgbActiveModal);
	formBuilder = inject(FormBuilder);

	form!: FormGroup;

	@Input() currentCurrencyValues: Currency[] = [];
	@Output() updateCurrencyEvent = new EventEmitter<Currency[]>();

	ngOnInit(): void {
        this.setForm();
	}

    setForm(): void {
        this.form = this.formBuilder.group({});

        for(const currency of this.currentCurrencyValues) {
            this.form.addControl(
                currency.name, 
                this.formBuilder.control(currency.amount, currencyValidators)
            );
        }
    }

    onSave(): void {
        if(this.form.valid) {
            this.emitUpdateCurrencyEvent();
            this.activeModal.close();
        }
    }

    updateCurrencies(): void {
        for(const currency of this.currentCurrencyValues) {
            currency.amount = this.getFormControlValue(currency.name);
        }
    }

    getFormControlValue(formControlName: string): number {
        return this.form.controls[formControlName].value;
    }

    isFormControlInvalid(formControlName: string): boolean {
        return this.form.controls[formControlName].invalid;
    }

    emitUpdateCurrencyEvent(): void {
        this.updateCurrencies();
        this.updateCurrencyEvent.emit(this.currentCurrencyValues);
    }
}
