import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Quality } from '../../models/quality.interface';

@Component({
  selector: 'app-quality-unselected-list-item',
  templateUrl: './quality-unselected-list-item.component.html',
  styleUrl: './quality-unselected-list-item.component.css'
})
export class QualityUnselectedListItemComponent {

    @Input() quality!: Quality;
    @Output() addQualityEvent = new EventEmitter<string>();

    isCollapsed = true;

    emitAddQualityEvent(): void {
        this.addQualityEvent.emit(this.quality.name);
    }
}
