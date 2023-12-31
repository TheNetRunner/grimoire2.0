import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTypeStepComponent } from './meta-type-step.component';

describe('MetaTypeStepComponent', () => {
  let component: MetaTypeStepComponent;
  let fixture: ComponentFixture<MetaTypeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaTypeStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetaTypeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
