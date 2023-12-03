import { Component, inject } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

import { SettingsNavbarComponent } from '../settings-navbar/settings-navbar.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css',
})
export class MainNavbarComponent {
    private offcanvasService = inject(NgbOffcanvas);

    isCollapsed: boolean = true;

    openSettingsMenu(): void {
        const offcanvasRef = this.offcanvasService.open(SettingsNavbarComponent, {animation: true, backdrop: true, position: 'end'});
    }

}
