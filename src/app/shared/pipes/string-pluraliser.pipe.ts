import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "stringPluraliser",
})
export class StringPluraliserPipe implements PipeTransform {
	transform(str: string, quantity: number): string {
		if (quantity < 2) {
			return str;
		} else {
			return str + "s";
		}
	}
}
