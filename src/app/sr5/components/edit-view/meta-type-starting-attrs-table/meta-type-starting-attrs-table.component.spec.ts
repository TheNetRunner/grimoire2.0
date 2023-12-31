import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTypeStartingAttrsTableComponent } from './meta-type-starting-attrs-table.component';

describe('MetaTypeStartingAttrsTableComponent', () => {
  let component: MetaTypeStartingAttrsTableComponent;
  let fixture: ComponentFixture<MetaTypeStartingAttrsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaTypeStartingAttrsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetaTypeStartingAttrsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
