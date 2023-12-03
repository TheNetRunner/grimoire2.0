import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSystemItemListModalComponent } from './game-system-item-list-modal.component';

describe('GameSystemItemListModalComponent', () => {
  let component: GameSystemItemListModalComponent;
  let fixture: ComponentFixture<GameSystemItemListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSystemItemListModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameSystemItemListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
