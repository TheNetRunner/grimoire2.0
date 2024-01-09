import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicStepMagicianComponent } from './magic-step-magician.component';

describe('MagicStepMagicianComponent', () => {
  let component: MagicStepMagicianComponent;
  let fixture: ComponentFixture<MagicStepMagicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicStepMagicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicStepMagicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
