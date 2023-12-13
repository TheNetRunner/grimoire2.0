import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellListItemComponent } from './spell-list-item.component';

describe('SpellListItemComponent', () => {
  let component: SpellListItemComponent;
  let fixture: ComponentFixture<SpellListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpellListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpellListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
