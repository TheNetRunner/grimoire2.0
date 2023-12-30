import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
    activeModalService = inject(NgbActiveModal);

    @Input() characterId: string = "";
    @Input() characterName: string = "";
    @Output() deleteCharacterEvent = new EventEmitter<void>();

    dismiss(): void {
        this.activeModalService.dismiss();
    }

    close(): void {
        this.activeModalService.close();
    }

    emitDeleteCharacterEvent(): void {
        this.deleteCharacterEvent.emit();
        this.close();
    }
}
