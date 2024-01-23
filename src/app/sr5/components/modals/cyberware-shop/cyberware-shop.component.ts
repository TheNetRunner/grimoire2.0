import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cyberware-shop',
  templateUrl: './cyberware-shop.component.html',
  styleUrl: './cyberware-shop.component.css'
})
export class CyberwareShopComponent {
    private activeModalService = inject(NgbActiveModal);

    close(): void {
        this.activeModalService.close();
    }

    dismiss(): void {
        this.activeModalService.dismiss();
    }
}
