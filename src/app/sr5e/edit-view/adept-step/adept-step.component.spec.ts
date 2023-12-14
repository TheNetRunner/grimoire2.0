import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeptStepComponent } from './adept-step.component';

describe('AdeptStepComponent', () => {
  let component: AdeptStepComponent;
  let fixture: ComponentFixture<AdeptStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdeptStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdeptStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
