import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectedMagicianStepComponent } from './aspected-magician-step.component';

describe('AspectedMagicianStepComponent', () => {
  let component: AspectedMagicianStepComponent;
  let fixture: ComponentFixture<AspectedMagicianStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AspectedMagicianStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AspectedMagicianStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
