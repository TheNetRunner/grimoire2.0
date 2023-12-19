import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityExceptionalAttrSelectedListItemComponent } from './quality-exceptional-attr-selected-list-item.component';

describe('QualityExceptionalAttrSelectedListItemComponent', () => {
  let component: QualityExceptionalAttrSelectedListItemComponent;
  let fixture: ComponentFixture<QualityExceptionalAttrSelectedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityExceptionalAttrSelectedListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityExceptionalAttrSelectedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
