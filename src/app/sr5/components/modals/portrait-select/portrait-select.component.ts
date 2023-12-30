import { Component, inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portrait-select',
  templateUrl: './portrait-select.component.html',
  styleUrl: './portrait-select.component.css'
})
export class PortraitSelectComponent implements OnInit {
    activeModalService = inject(NgbActiveModal);

    @Input() characterImageName: string = "";
    @Output() portraitSelectEvent = new EventEmitter<string>();

    portraitNames: string[] = [];

    ngOnInit(): void {
        this.setPortraitUrls();
    }

    setPortraitUrls(): void {
        for (let i = 1; i <= 22; i++) {
            this.portraitNames.push(`portrait_${i}`);
        }
    }

    dismiss(): void {
        this.activeModalService.dismiss();
    }

    close(): void {
        this.activeModalService.close();
    }

    emitPortraitSelectEvent(portraitName: string): void {
        this.portraitSelectEvent.emit(portraitName);
        this.characterImageName = portraitName;
    }
}
