import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemListItemComponent } from './inventory-item-list-item.component';

describe('InventoryItemListItemComponent', () => {
  let component: InventoryItemListItemComponent;
  let fixture: ComponentFixture<InventoryItemListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryItemListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
