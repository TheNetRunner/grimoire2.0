import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnomancerStepComponent } from './technomancer-step.component';

describe('TechnomancerStepComponent', () => {
  let component: TechnomancerStepComponent;
  let fixture: ComponentFixture<TechnomancerStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnomancerStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnomancerStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
