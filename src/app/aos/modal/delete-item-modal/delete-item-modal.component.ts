import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrl: './delete-item-modal.component.css'
})
export class DeleteItemModalComponent {
    private activeModalService = inject(NgbActiveModal);

    @Input() title: string = "";
    @Input() strongWarning: string = "";
    @Input() text: string = "";
    @Input() outputItem: any;
    @Output() deleteItemEvent: EventEmitter<void> = new EventEmitter<any>();

    dismiss(): void {
        this.activeModalService.dismiss();
    }

    close(): void {
        this.activeModalService.close();
    }

    emitDeleteItemEvent(): void {
        this.deleteItemEvent.emit(this.outputItem);
        this.close();
    }

}
