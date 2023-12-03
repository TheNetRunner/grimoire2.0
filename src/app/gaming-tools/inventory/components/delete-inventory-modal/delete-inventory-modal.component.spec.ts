import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { DeleteInventoryModalComponent } from "./delete-inventory-modal.component";

describe("DeleteInventoryModalComponent", () => {
	let component: DeleteInventoryModalComponent;
	let fixture: ComponentFixture<DeleteInventoryModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgbActiveModal],
			declarations: [DeleteInventoryModalComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DeleteInventoryModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
