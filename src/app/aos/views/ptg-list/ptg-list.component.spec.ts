import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtgListComponent } from './ptg-list.component';

describe('PtgListComponent', () => {
  let component: PtgListComponent;
  let fixture: ComponentFixture<PtgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PtgListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PtgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
