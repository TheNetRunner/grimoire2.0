import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptStepComponent } from './concept-step.component';

describe('ConceptStepComponent', () => {
  let component: ConceptStepComponent;
  let fixture: ComponentFixture<ConceptStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConceptStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConceptStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
