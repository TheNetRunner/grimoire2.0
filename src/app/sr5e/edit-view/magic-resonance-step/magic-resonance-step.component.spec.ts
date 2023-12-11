import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicResonanceStepComponent } from './magic-resonance-step.component';

describe('MagicResonanceStepComponent', () => {
  let component: MagicResonanceStepComponent;
  let fixture: ComponentFixture<MagicResonanceStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicResonanceStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicResonanceStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
