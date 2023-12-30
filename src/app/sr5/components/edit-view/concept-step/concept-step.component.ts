import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ShadowRun5ECharacter } from '../../../character/character';
import { PortraitSelectComponent } from '../../modals/portrait-select/portrait-select.component';
import { DataStoreService } from '../../../services/data-store.service';

@Component({
  selector: 'app-concept-step',
  templateUrl: './concept-step.component.html',
  styleUrl: './concept-step.component.css'
})
export class ConceptStepComponent implements OnInit {
    private modalService = inject(NgbModal);
    private dataService = inject(DataStoreService);

    @Input() character!: ShadowRun5ECharacter;

    characterImageUrl: string = "";

    ngOnInit(): void {
        this.setCharacterImageUrl();
    }

    setCharacterImageUrl(): void {
        this.characterImageUrl = `../../../../../assets/imgs/shadow-run/portraits/${this.character.imageName}.png`;
    }

    openPortraitSelectModal(): void {
        const modalRef = this.modalService.open(PortraitSelectComponent, { size: 'lg', animation: true, centered: true, scrollable: true, windowClass: 'modal-height' });

        modalRef.componentInstance.characterImageName = this.character.imageName;

        modalRef.componentInstance.portraitSelectEvent.subscribe((portraitName: string) => {
            this.character.imageName = portraitName;
            this.setCharacterImageUrl();
            this.saveCharacterChanges();
        });
    }

    saveCharacterChanges(): void {
        this.dataService.updateCharacter(this.character.id, this.character.getSaveObject());
    }
}
