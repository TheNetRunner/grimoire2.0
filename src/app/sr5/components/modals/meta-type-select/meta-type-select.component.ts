import { Component, Input, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { MetaType } from '../../../character/interfaces/meta-type.interface';
import { metaTypeAttributesTable } from '../../../character/tables/meta-type-attributes.table';
import { MetaTypeAttributesTableRow } from '../../../character/interfaces/attribute.interface';

@Component({
  selector: 'app-meta-type-select',
  templateUrl: './meta-type-select.component.html',
  styleUrl: './meta-type-select.component.css'
})
export class MetaTypeSelectComponent {
    private activeModalService = inject(NgbActiveModal)

    @Input() currentMetaType!: MetaType;
    @Output() metaTypeSelectEvent = new EventEmitter<MetaType>();

    metaTypeOptions: MetaType[] = Object.values(MetaType);

    humanCollapsed = true;
    orkCollapsed = true;
    elfCollapsed = true;
    dwarfCollapsed = true;
    trollCollapsed = true;

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
