import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInventoryItemModalComponent } from './edit-inventory-item-modal.component';

describe('EditInventoryItemModalComponent', () => {
  let component: EditInventoryItemModalComponent;
  let fixture: ComponentFixture<EditInventoryItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInventoryItemModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInventoryItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
