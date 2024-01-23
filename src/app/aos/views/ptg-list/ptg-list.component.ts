import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataStoreService } from '../../services/data-store.service';
import { Roster } from '../../roster/roster';
import { RosterData } from '../../roster/roster.interfaces';
import { DeleteItemModalComponent } from '../../modal/delete-item-modal/delete-item-modal.component';

@Component({
  selector: 'app-ptg-list',
  templateUrl: './ptg-list.component.html',
  styleUrl: './ptg-list.component.css'
})
export class PtgListComponent {
    private dataStoreService = inject(DataStoreService);
    private modalService = inject(NgbModal);

    rosters: Roster[] = [];
    errors: string[] = [];

    ngOnInit(): void {
        this.setRosters();
    }

    setRosters(): void {
        this.dataStoreService.getRosters().subscribe((rosters: RosterData[]) => {
            this.rosters = rosters.map((roster: RosterData) => new Roster(roster));
        });
    }

    craftRoster(): void {
        if(this.rosters.length < 25) {
            this.dataStoreService.createRoster();
        } else {
            this.errors.push("You can only have 25 rosters at a time.");
        }
    }

    openDeleteRosterModal(roster: Roster): void {
        const modalRef = this.modalService.open(DeleteItemModalComponent);

        modalRef.componentInstance.title = "Roster Deletion!"
        modalRef.componentInstance.strongWarning = "Are you sure you want to delete this roster?"
        modalRef.componentInstance.text = `All the information associated with "${ roster.name }" will be lost and unless you have a backup you will not be able to recover it.`
        modalRef.componentInstance.outputItem = roster.id;

        modalRef.componentInstance.deleteItemEvent.subscribe((rosterId: string) => {
            this.deleteRoster(rosterId);
        });
    }

    deleteRoster(rosterId: string): void {
        this.dataStoreService.deleteRoster(rosterId);
    }

    dismissError(index: number): void {
        this.errors.splice(index, 1);
    }
}
