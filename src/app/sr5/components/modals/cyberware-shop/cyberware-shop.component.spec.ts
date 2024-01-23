import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberwareShopComponent } from './cyberware-shop.component';

describe('CyberwareShopComponent', () => {
  let component: CyberwareShopComponent;
  let fixture: ComponentFixture<CyberwareShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyberwareShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberwareShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
