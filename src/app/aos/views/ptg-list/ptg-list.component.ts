import { Component, inject } from '@angular/core';

import { DataStoreService } from '../../services/data-store.service';
import { Roster } from '../../roster/roster';
import { RosterData } from '../../roster/roster.interfaces';

@Component({
  selector: 'app-ptg-list',
  templateUrl: './ptg-list.component.html',
  styleUrl: './ptg-list.component.css'
})
export class PtgListComponent {
    private dataStoreService = inject(DataStoreService);

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

    dismissError(index: number): void {
        this.errors.splice(index, 1);
    }
}
