import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "stringAbbreviationer",
})
export class StringAbbreviationerPipe implements PipeTransform {
	transform(value: string): string {
		switch (value) {
			case "nuyen":
				return "¥";
			default:
				return this.getFirstLetters(value);
		}
	}

	getFirstLetters(value: string): string {
		const words = value.split(" ");
		const firstLetters = words.map((words) => words.charAt(0));
		const result = firstLetters.join("");
		return result;
	}
}
