import { Injectable } from '@angular/core';

import { Attribute } from '../models/attribute.interface';
import { MetaType, MetaTypeDescriptions, MetaTypeAttributeTableRow } from '../models/meta-type.model';
import { metaTypeDescriptions } from '../data/meta-type-descriptions.data';
import { metaTypeAttributesTable } from '../data/meta-type-attribute-table.data';


@Injectable({
  providedIn: 'root'
})
export class MetaTypeService {

    getMetaTypeDescription(metaType: MetaType): MetaTypeDescriptions[MetaType] {
        return metaTypeDescriptions[metaType];
    }

    getMetaTypeRacialAbilities(metaType: MetaType): string {
        return metaTypeAttributesTable[metaType].racial;
    }

    getMetaTypeAttributesTableRow(metaType: MetaType): MetaTypeAttributeTableRow {
        return metaTypeAttributesTable[metaType];
    }

    getMetaTypeStartingAttributes(metaType: MetaType, attribute: Attribute): { base: number; max: number; } {
        const row = this.getMetaTypeAttributesTableRow(metaType);
        return row.attributes[attribute as keyof typeof row.attributes];
    }
}
