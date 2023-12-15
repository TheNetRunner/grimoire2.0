import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityUnselectedListItemComponent } from './quality-unselected-list-item.component';

describe('QualityUnselectedListItemComponent', () => {
  let component: QualityUnselectedListItemComponent;
  let fixture: ComponentFixture<QualityUnselectedListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityUnselectedListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityUnselectedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
