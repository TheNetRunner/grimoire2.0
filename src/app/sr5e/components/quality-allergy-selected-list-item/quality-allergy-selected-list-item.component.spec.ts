import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAllergySelectedListItemComponent } from './quality-allergy-selected-list-item.component';

describe('QualityAllergySelectedListItemComponent', () => {
  let component: QualityAllergySelectedListItemComponent;
  let fixture: ComponentFixture<QualityAllergySelectedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityAllergySelectedListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityAllergySelectedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
