import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MagicUserType } from '../../../character/interfaces/magic.interface';
import { Priority } from '../../../character/priorities/priority.interface';
import PriorityTableProvider from '../../../character/priorities/priority-table-provider';

@Component({
  selector: 'app-magic-user-type-select',
  templateUrl: './magic-user-type-select.component.html',
  styleUrl: './magic-user-type-select.component.css'
})
export class MagicUserTypeSelectComponent {
    private activeModalService = inject(NgbActiveModal);

    @Input() currentMagicUserType!: MagicUserType;
    @Input() magicUserPriority!: Priority;
    @Output() magicUserTypeSelectEvent = new EventEmitter<MagicUserType>();

    magicUserTypeOptions: MagicUserType[] = [];
    priorityTableProvider = new PriorityTableProvider();

    ngOnInit(): void {
        this.setMagicUserTypeOptions();
    }

    setMagicUserTypeOptions(): void {
        this.magicUserTypeOptions = this.priorityTableProvider.getMagicUserTypeOptions(this.magicUserPriority);
    }

    dismiss(): void {
        this.activeModalService.dismiss();
    }

    close(): void {
        this.activeModalService.close();
    }

    emitMagicUserTypeSelect(magicUserType: MagicUserType): void {
        this.magicUserTypeSelectEvent.emit(magicUserType);
        this.activeModalService.close();
    }
}
