import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataStoreService } from "../../../services/data-store.service";
import { ShadowRun5ECharacter } from '../../../character/character';
import { CyberwareShopComponent } from '../../../components/modals/cyberware-shop/cyberware-shop.component';
@Component({
  selector: 'app-augment-step',
  templateUrl: './augment-step.component.html',
  styleUrl: './augment-step.component.css'
})
export class AugmentStepComponent {
    private modalService = inject(NgbModal);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    openCyberwareModal(): void {
        const options = { animation: true, centered: true, scrollable: true, size: 'xxl' }
        const modalRef = this.modalService.open(CyberwareShopComponent, options);
    }
}
