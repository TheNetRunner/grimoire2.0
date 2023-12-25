import { Injectable } from '@angular/core';

import { LevelOfPlay } from '../models/settings.interface';
import { Priority, PriorityTableRow } from '../models/priority.interface';
import { priorityTable } from '../data/priority-table.data';

@Injectable({
  providedIn: 'root'
})
export class PriorityTableService {

    getMetaTypes(priority: Priority): PriorityTableRow['metaTypes'] {
        return this.getPriorityTableRow(priority).metaTypes;
    }

    getAttributePoints(priority: Priority): number {
        return this.getPriorityTableRow(priority).attributePoints
    }

    getMagicText(priority: Priority): PriorityTableRow['magicText'] {
        return this.getPriorityTableRow(priority).magicText;
    }

    getSkills(priority: Priority): PriorityTableRow['skills'] {
        return this.getPriorityTableRow(priority).skills;
    }

    getMagic(priority: Priority): PriorityTableRow['magic'] {
        return this.getPriorityTableRow(priority).magic;
    }

    getResouces(priority: Priority): PriorityTableRow['resources'] {
        return this.getPriorityTableRow(priority).resources;
    }

    getResourceAmountByLevelOfPlay(priority: Priority, levelOfPlay: LevelOfPlay): number {
        return this.getResouces(priority)[levelOfPlay];
    }

    private getPriorityTableRow(priority: Priority): PriorityTableRow {
        return priorityTable[priority];
    }
}
