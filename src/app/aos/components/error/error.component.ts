import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
    
    @Input() errorText: string = "";
    @Input() errorIndex: number = 0;
    @Output() dismissErrorEvent = new EventEmitter<number>();

    emitDismissErrorEvent(): void {
        this.dismissErrorEvent.emit(this.errorIndex);
    }
}
