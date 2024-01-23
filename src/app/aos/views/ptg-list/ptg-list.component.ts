import { Component } from '@angular/core';

import { Roster } from '../../roster/roster';
import { RosterData } from '../../roster/roster.interfaces';

@Component({
  selector: 'app-ptg-list',
  templateUrl: './ptg-list.component.html',
  styleUrl: './ptg-list.component.css'
})
export class PtgListComponent {

    rosters: Roster[] = [new Roster({ name: 'Test', id: '1', created: Date.now(), lastUpdated: Date.now() + 1000 })];
}
