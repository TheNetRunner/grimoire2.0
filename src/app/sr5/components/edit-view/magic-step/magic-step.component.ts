import { Component, Input, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShadowRun5ECharacter } from '../../../character/character';
import { MagicUserType } from '../../../character/interfaces/magic.interface';
import { MagicUserTypeSelectComponent } from '../../modals/magic-user-type-select/magic-user-type-select.component';
import { DataStoreService } from '../../../services/data-store.service';

@Component({
  selector: 'app-magic-step',
  templateUrl: './magic-step.component.html',
  styleUrl: './magic-step.component.css'
})
export class MagicStepComponent {
    private modalService = inject(NgbModal);
    private dataStoreService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    openChangeMagicUserTypeModal(): void {
        const modalRef = this.modalService.open(MagicUserTypeSelectComponent, { size: 'lg', scrollable: true });

        modalRef.componentInstance.currentMagicUserType = this.character.magicUserType;
        modalRef.componentInstance.magicUserPriority = this.character.priorities.magic;

        modalRef.componentInstance.magicUserTypeSelectEvent.subscribe((magicUserType: MagicUserType) => {
            this.character.magicUserType = magicUserType;
            this.dataStoreService.updateCharacter(this.character.id, this.character.getSaveObject());
        });
    }
}
