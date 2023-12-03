import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-settings-navbar',
  templateUrl: './settings-navbar.component.html',
  styleUrl: './settings-navbar.component.css'
})
export class SettingsNavbarComponent {
    document = inject(DOCUMENT);
    activeOffcanvas = inject(NgbActiveOffcanvas);

    themeSwitch(themeName: string) {
        const head = this.document.getElementsByTagName('head')[0];

        let themeLink = this.document.getElementById('client-theme') as HTMLLinkElement;

        if (themeLink) {
            themeLink.href = `./assets/css/${themeName}.bootstrap.min.css`;
        } else {
            const style = this.document.createElement('link');
            style.id = 'client-theme';
            style.rel = 'stylesheet';
            style.href = `${themeName}`;

            head.appendChild(style);
        }
    }
}
