import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Spell } from '../../models/magic.model';

@Component({
  selector: 'app-spell-list-item',
  templateUrl: './spell-list-item.component.html',
  styleUrl: './spell-list-item.component.css'
})
export class SpellListItemComponent {

    @Input() spell!: Spell;
    @Input() buttonLabel: string = ""
    @Output() buttonClick = new EventEmitter<Spell>();

    isCollapsed = true;

    emitButtonClick(): void {
        this.buttonClick.emit(this.spell);
    }
}
