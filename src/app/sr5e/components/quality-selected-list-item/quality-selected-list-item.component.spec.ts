import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitySelectedListItemComponent } from './quality-selected-list-item.component';

describe('QualitySelectedListItemComponent', () => {
  let component: QualitySelectedListItemComponent;
  let fixture: ComponentFixture<QualitySelectedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualitySelectedListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualitySelectedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
