import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityStepComponent } from './priority-step.component';

describe('PriorityStepComponent', () => {
  let component: PriorityStepComponent;
  let fixture: ComponentFixture<PriorityStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriorityStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriorityStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
