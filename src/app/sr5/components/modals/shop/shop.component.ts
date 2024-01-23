import { Component, Input, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
    private activeModalService = inject(NgbActiveModal);

    @Input() title: string = "";
    @Input() items: any[] = [];

    close(): void {
        this.activeModalService.close();
    }

    dismiss(): void {
        this.activeModalService.dismiss();
    }
}
