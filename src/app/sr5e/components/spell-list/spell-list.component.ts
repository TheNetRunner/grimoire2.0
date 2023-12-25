import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Spell } from '../../models/magic.interface';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrl: './spell-list.component.css'
})
export class SpellListComponent {

    @Input() listTitle: string = '';
    @Input() listTitleSecond: string = '';
    @Input() spellList: Spell[] = [];
    @Input() itemButtonLabel: string = '';
    @Output() itemButtonClick = new EventEmitter<Spell>();

    isCollapsed: boolean = true;

    emitItemButtonClick(spell: Spell): void {
        this.itemButtonClick.emit(spell);
    }
}
