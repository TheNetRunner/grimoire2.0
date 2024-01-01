import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Quality } from '../../../character/interfaces/quality.interface';

@Component({
  selector: 'app-quality-list-item',
  templateUrl: './quality-list-item.component.html',
  styleUrl: './quality-list-item.component.css'
})
export class QualityListItemComponent {

    @Input() quality!: Quality;
    @Output() addQualityEvent = new EventEmitter<Quality>();

    collapsed: boolean = true;

    emitAddQualityEvent(): void {
        this.addQualityEvent.emit(this.quality);
    }
}
