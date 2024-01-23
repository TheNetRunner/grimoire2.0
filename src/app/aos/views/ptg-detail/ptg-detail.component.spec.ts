import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtgDetailComponent } from './ptg-detail.component';

describe('PtgDetailComponent', () => {
  let component: PtgDetailComponent;
  let fixture: ComponentFixture<PtgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PtgDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
