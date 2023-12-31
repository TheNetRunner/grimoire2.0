import { Component, Input, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MetaType } from '../../../character/interfaces/meta-type.interface';
import { metaTypeAttributesTable } from '../../../character/tables/meta-type-attributes.table';
import { MetaTypeAttributesTableRow } from '../../../character/interfaces/attribute.interface';
import { MetaTypeStartingValues } from '../../../character/interfaces/priority.interface';
import { priorityTable } from '../../../character/tables/priority-table.data';
import { Priority } from '../../../character/interfaces/priority.interface';

interface MetaTypeOptions {
    metaType: MetaType;
    specialAttrPoints: number;
}

@Component({
  selector: 'app-meta-type-select',
  templateUrl: './meta-type-select.component.html',
  styleUrl: './meta-type-select.component.css'
})
export class MetaTypeSelectComponent implements OnInit {
    private activeModalService = inject(NgbActiveModal)

    @Input() metaTypePriority!: Priority;
    @Input() currentMetaType!: MetaType;
    @Output() metaTypeSelectEvent = new EventEmitter<MetaType>();

    metaTypeOptions: MetaTypeStartingValues[] = [];

    ngOnInit(): void {
        this.setMetaTypeOptions();
    }

    setMetaTypeOptions(): void {
        const priorityTableRow = priorityTable[this.metaTypePriority];
        this.metaTypeOptions = priorityTableRow.metaTypes
    }

    dismiss(): void {
        this.activeModalService.dismiss();
    }

    close(): void {
        this.activeModalService.close();
    }

    emitSelectMetaType(metaType: MetaType): void {
        this.metaTypeSelectEvent.emit(metaType);
        this.close();
    }

    getMetaTypeRacial(metaType: MetaType): string {
        return metaTypeAttributesTable[metaType].racial;
    }

    getMetaTypeAttributeTableRow(metaType: MetaType): MetaTypeAttributesTableRow['attributes'] {
        return metaTypeAttributesTable[metaType].attributes;
    }
}
