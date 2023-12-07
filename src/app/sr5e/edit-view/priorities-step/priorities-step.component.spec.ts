import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritiesStepComponent } from './priorities-step.component';

describe('PrioritiesStepComponent', () => {
  let component: PrioritiesStepComponent;
  let fixture: ComponentFixture<PrioritiesStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrioritiesStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrioritiesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
