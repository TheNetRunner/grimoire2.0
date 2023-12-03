import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { DetailViewComponent } from "./detail-view.component";

describe("DetailViewComponent", () => {
	let component: DetailViewComponent;
	let fixture: ComponentFixture<DetailViewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgbModal],
			declarations: [DetailViewComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DetailViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
