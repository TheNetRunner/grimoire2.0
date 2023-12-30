import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitSelectComponent } from './portrait-select.component';

describe('PortraitSelectComponent', () => {
  let component: PortraitSelectComponent;
  let fixture: ComponentFixture<PortraitSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortraitSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortraitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
