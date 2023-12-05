import { Component, EventEmitter, Input, Output, inject,  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-character-modal',
  templateUrl: './delete-character-modal.component.html',
  styleUrl: './delete-character-modal.component.css'
})
export class DeleteCharacterModalComponent {
    activeModalService = inject(NgbActiveModal);

    @Input() characterId!: string;
    @Output() deleteCharacterEvent = new EventEmitter<string>();

    emitDeleteCharacter(): void {
        this.deleteCharacterEvent.emit(this.characterId);
    }

}
