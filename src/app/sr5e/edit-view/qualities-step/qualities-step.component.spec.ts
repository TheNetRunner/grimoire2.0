import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitiesStepComponent } from './qualities-step.component';

describe('QualitiesStepComponent', () => {
  let component: QualitiesStepComponent;
  let fixture: ComponentFixture<QualitiesStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualitiesStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualitiesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
