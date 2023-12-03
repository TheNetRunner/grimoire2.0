import { TestBed } from "@angular/core/testing";
import { StringPluraliserPipe } from "./string-pluraliser.pipe";

describe("StringPluraliserPipe", () => {
	let pipe: StringPluraliserPipe;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [StringPluraliserPipe],
		});

		pipe = TestBed.inject(StringPluraliserPipe);
	});

	it("create an instance", () => {
		const pipe = new StringPluraliserPipe();
		expect(pipe).toBeTruthy();
	});

	describe("transform", () => {
		it("should plurasile a string if the qty is greater than 1", () => {
			// arrange

			// act
			const result = pipe.transform(5, "long sword");

			//assert
			expect(result).toBe("5 long swords");
		});
	});
});
