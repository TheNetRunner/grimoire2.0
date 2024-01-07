import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShadowRun5ECharacter } from '../../../character/character';
import { DataStoreService } from '../../../services/data-store.service';
import { MetaType, MetaTypeDescription } from '../../../character/interfaces/meta-type.interface';
import { MetaTypeAttributesTableRow } from '../../../character/interfaces/attribute.interface';

import { metaTypeDescriptions } from '../../../character/tables/meta-type-descriptions.table';
import { metaTypeAttributesTable } from '../../../character/tables/meta-type-attributes.table';
import { MetaTypeSelectComponent } from '../../modals/meta-type-select/meta-type-select.component';

@Component({
  selector: 'app-meta-type-step',
  templateUrl: './meta-type-step.component.html',
  styleUrl: './meta-type-step.component.css'
})
export class MetaTypeStepComponent implements OnInit {
    private modalService = inject(NgbModal);
    private dataService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    metaTypeDescription!: MetaTypeDescription;
    metaTypeAttributesTableRow!: MetaTypeAttributesTableRow;

    ngOnInit(): void {
        this.setMetaTypeDescription();
        this.setMetaTypeAttributesTableRow();
    }

    handleMetaTypeChange(): void {
        this.setMetaTypeDescription();
        this.setMetaTypeAttributesTableRow();
    }

    setMetaTypeDescription(): void {
        this.metaTypeDescription = metaTypeDescriptions[this.character.metaType];
    }

    setMetaTypeAttributesTableRow(): void {
        this.metaTypeAttributesTableRow = metaTypeAttributesTable[this.character.metaType];
    }

    openChangeMetaTypeModal(): void {
        const modalRef = this.modalService.open(
            MetaTypeSelectComponent, 
            { size: 'lg', scrollable: true }
        );

        modalRef.componentInstance.metaTypePriority = this.character.priorities.metaType;
        modalRef.componentInstance.currentMetaType = this.character.metaType;

        modalRef.componentInstance.metaTypeSelectEvent.subscribe((metaType: MetaType) => {
            this.character.handleMetaTypeChange(metaType);
            this.handleMetaTypeChange();

            this.dataService.updateCharacter(this.character.id, this.character.getSaveObject());
        });
    }
}
