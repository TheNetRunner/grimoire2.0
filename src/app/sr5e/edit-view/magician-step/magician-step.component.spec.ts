import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianStepComponent } from './magician-step.component';

describe('MagicianStepComponent', () => {
  let component: MagicianStepComponent;
  let fixture: ComponentFixture<MagicianStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicianStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicianStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
