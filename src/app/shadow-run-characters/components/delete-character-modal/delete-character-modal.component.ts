import { Component, EventEmitter, Input, Output, inject,  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ShadowRunCharacter } from '../../models/shadow-run.model';

@Component({
  selector: 'app-delete-character-modal',
  templateUrl: './delete-character-modal.component.html',
  styleUrl: './delete-character-modal.component.css'
})
export class DeleteCharacterModalComponent {
    activeModalService = inject(NgbActiveModal);

    @Input() character!: ShadowRunCharacter;
    @Output() deleteCharacterEvent = new EventEmitter<string>();

    onDelete(): void {
        this.deleteCharacterEvent.emit(this.character.id);
        this.activeModalService.close();
    }

}
