import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInventoryModalComponent } from './upload-inventory-modal.component';

describe('UploadInventoryModalComponent', () => {
  let component: UploadInventoryModalComponent;
  let fixture: ComponentFixture<UploadInventoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadInventoryModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadInventoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
