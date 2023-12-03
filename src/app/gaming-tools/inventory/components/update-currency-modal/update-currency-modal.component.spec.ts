import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrencyModalComponent } from './update-currency-modal.component';

describe('UpdateCurrencyModalComponent', () => {
  let component: UpdateCurrencyModalComponent;
  let fixture: ComponentFixture<UpdateCurrencyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateCurrencyModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCurrencyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
