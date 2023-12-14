import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysticAdeptStepComponent } from './mystic-adept-step.component';

describe('MysticAdeptStepComponent', () => {
  let component: MysticAdeptStepComponent;
  let fixture: ComponentFixture<MysticAdeptStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MysticAdeptStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysticAdeptStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
