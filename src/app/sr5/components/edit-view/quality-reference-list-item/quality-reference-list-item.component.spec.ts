import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityReferenceListItemComponent } from './quality-reference-list-item.component';

describe('QualityReferenceListItemComponent', () => {
  let component: QualityReferenceListItemComponent;
  let fixture: ComponentFixture<QualityReferenceListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualityReferenceListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityReferenceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
