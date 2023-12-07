import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeStepComponent } from './attribute-step.component';

describe('AttributeStepComponent', () => {
  let component: AttributeStepComponent;
  let fixture: ComponentFixture<AttributeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
