import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityListItemComponent } from './quality-list-item.component';

describe('QualityListItemComponent', () => {
  let component: QualityListItemComponent;
  let fixture: ComponentFixture<QualityListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
