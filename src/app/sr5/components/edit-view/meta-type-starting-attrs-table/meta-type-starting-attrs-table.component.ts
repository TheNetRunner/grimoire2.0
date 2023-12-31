import { Component, Input, OnInit, inject, SimpleChanges } from '@angular/core';

import { MetaType } from '../../../character/interfaces/meta-type.interface';
import { MetaTypeAttributesTableRow } from '../../../character/interfaces/attribute.interface';
import { metaTypeAttributesTable } from '../../../character/tables/meta-type-attributes.table';


@Component({
  selector: 'app-meta-type-starting-attrs-table',
  templateUrl: './meta-type-starting-attrs-table.component.html',
  styleUrl: './meta-type-starting-attrs-table.component.css'
})
export class MetaTypeStartingAttrsTableComponent implements OnInit {

    @Input() metaType!: MetaType;

    ngOnInit(): void {
        this.setMetaTypeAttributesTableRow();
    }

    ngOnChanges(): void {
        this.setMetaTypeAttributesTableRow();
    }

    metaTypeAttributesTableRow!: MetaTypeAttributesTableRow;

    setMetaTypeAttributesTableRow(): void {
        this.metaTypeAttributesTableRow = metaTypeAttributesTable[this.metaType];
    }
}
