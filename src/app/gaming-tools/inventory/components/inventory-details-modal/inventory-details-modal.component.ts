import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Inventory } from '../../models/inventory.model';

@Component({
  selector: 'app-inventory-details-modal',
  templateUrl: './inventory-details-modal.component.html',
  styleUrl: './inventory-details-modal.component.css'
})
export class InventoryDetailsModalComponent {
    private activeModalService = inject(NgbActiveModal);

    @Input() inventory!: Inventory;

    close(): void {
        this.activeModalService.close();
    }

    dismiss(): void {
        this.activeModalService.dismiss();
    }
}
