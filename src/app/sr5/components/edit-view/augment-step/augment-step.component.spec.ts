import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentStepComponent } from './augment-step.component';

describe('AugmentStepComponent', () => {
  let component: AugmentStepComponent;
  let fixture: ComponentFixture<AugmentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AugmentStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AugmentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
