import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionalQualityListItemComponent } from './exceptional-quality-list-item.component';

describe('ExceptionalQualityListItemComponent', () => {
  let component: ExceptionalQualityListItemComponent;
  let fixture: ComponentFixture<ExceptionalQualityListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExceptionalQualityListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExceptionalQualityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
