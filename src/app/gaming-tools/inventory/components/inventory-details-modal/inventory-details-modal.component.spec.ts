import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDetailsModalComponent } from './inventory-details-modal.component';

describe('InventoryDetailsModalComponent', () => {
  let component: InventoryDetailsModalComponent;
  let fixture: ComponentFixture<InventoryDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
