import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellSelectorComponent } from './spell-selector.component';

describe('SpellSelectorComponent', () => {
  let component: SpellSelectorComponent;
  let fixture: ComponentFixture<SpellSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpellSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpellSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
