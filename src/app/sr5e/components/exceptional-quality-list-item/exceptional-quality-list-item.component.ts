import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Quality } from '../../models/quality.model';
import { AttributeName } from '../../models/attribute.model';

@Component({
  selector: 'app-exceptional-quality-list-item',
  templateUrl: './exceptional-quality-list-item.component.html',
  styleUrl: './exceptional-quality-list-item.component.css'
})
export class ExceptionalQualityListItemComponent implements OnInit {
    @Input() quality!: Quality;
    @Input() buttonLabel: string = "";
    @Output() buttonClickEvent = new EventEmitter<Quality>();
    @Output() exceptionalAttributeChangeEvent = new EventEmitter<Quality>();

    attributeNames: AttributeName[] = Object.values(AttributeName);
    attributeFormControl!: FormControl;
    isCollapsed: boolean = true;

    ngOnInit(): void {
        this.setExceptionalAttributeFormControl();
    }

    setExceptionalAttributeFormControl(): void {
        this.attributeFormControl = new FormControl(this.quality.attribute);

        this.attributeFormControl.valueChanges.subscribe((attribute: AttributeName) => {
            this.quality.attribute = attribute;

            this.exceptionalAttributeChangeEvent.emit(this.quality);
        });
    }

    emitButtonClick(): void {
        return this.buttonClickEvent.emit(this.quality);
    }
}
