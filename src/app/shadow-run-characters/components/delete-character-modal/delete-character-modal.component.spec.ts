import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCharacterModalComponent } from './delete-character-modal.component';

describe('DeleteCharacterModalComponent', () => {
  let component: DeleteCharacterModalComponent;
  let fixture: ComponentFixture<DeleteCharacterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCharacterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
