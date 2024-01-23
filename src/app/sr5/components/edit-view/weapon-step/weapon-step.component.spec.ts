import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponStepComponent } from './weapon-step.component';

describe('WeaponStepComponent', () => {
  let component: WeaponStepComponent;
  let fixture: ComponentFixture<WeaponStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaponStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
