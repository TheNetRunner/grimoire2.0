import { Component, EventEmitter, Input, Output, inject,  } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ShadowRun5ECharacter } from '../../models/character.inteface';

@Component({
  selector: 'app-delete-character',
  templateUrl: './delete-character.component.html',
  styleUrl: './delete-character.component.css'
})
export class DeleteCharacterComponent {
    activeModalService = inject(NgbActiveModal);

    @Input() character!: ShadowRun5ECharacter;
    @Output() deleteCharacterEvent = new EventEmitter<string>();

    onDelete(): void {
        this.deleteCharacterEvent.emit(this.character.id);
        this.activeModalService.close();
    }
}
