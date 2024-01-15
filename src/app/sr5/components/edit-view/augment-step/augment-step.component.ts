import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataStoreService } from "../../../services/data-store.service";
import { ShadowRun5ECharacter } from '../../../character/character';

@Component({
  selector: 'app-augment-step',
  templateUrl: './augment-step.component.html',
  styleUrl: './augment-step.component.css'
})
export class AugmentStepComponent {
    private modalService = inject(NgbModal);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;
}
