import { Component, Input } from '@angular/core';

import { editorSteps } from '../../pages/edit-view/edit-view.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    @Input() characterName: string = "";

    isCollapsed = true;
    editorSteps = editorSteps;
}
