import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaTypeSelectComponent } from './meta-type-select.component';

describe('MetaTypeSelectComponent', () => {
  let component: MetaTypeSelectComponent;
  let fixture: ComponentFixture<MetaTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaTypeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetaTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
