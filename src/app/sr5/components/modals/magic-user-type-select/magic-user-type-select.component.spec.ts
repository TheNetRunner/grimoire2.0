import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicUserTypeSelectComponent } from './magic-user-type-select.component';

describe('MagicUserTypeSelectComponent', () => {
  let component: MagicUserTypeSelectComponent;
  let fixture: ComponentFixture<MagicUserTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicUserTypeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MagicUserTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
