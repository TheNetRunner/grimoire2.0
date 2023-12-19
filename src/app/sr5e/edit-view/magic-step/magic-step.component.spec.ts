import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicStepComponent } from './magic-step.component';

describe('MagicStepComponent', () => {
  let component: MagicStepComponent;
  let fixture: ComponentFixture<MagicStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
