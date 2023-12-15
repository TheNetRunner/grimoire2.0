import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Quality } from '../../models/quality.model';
import { AttributeName } from '../../models/attribute.model';

@Component({
  selector: 'app-quality-list-item',
  templateUrl: './quality-list-item.component.html',
  styleUrl: './quality-list-item.component.css'
})
export class QualityListItemComponent {

    @Input() quality!: Quality;
    @Input() buttonLabel: string = "";
    @Output() buttonClickEvent = new EventEmitter<Quality>();

    isCollapsed: boolean = true;

    emitButtonClick(): void {
        return this.buttonClickEvent.emit(this.quality);
    }
}
