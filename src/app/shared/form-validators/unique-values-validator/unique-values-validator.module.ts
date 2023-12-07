import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function areFormValuesUnique(): ValidatorFn {
	return (formGroup: AbstractControl): ValidationErrors | null => {
		const values = Object.values(formGroup.value);

		if (values.some((val) => values.indexOf(val) !== values.lastIndexOf(val))) {
			return { nonUniqueValues: true };
		}

		return null;
	};
}
