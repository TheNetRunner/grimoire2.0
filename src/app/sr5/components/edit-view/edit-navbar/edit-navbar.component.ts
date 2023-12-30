import { Component, Input } from '@angular/core';

import { EDITOR_STEPS } from '../../../common/constants';

@Component({
  selector: 'app-edit-navbar',
  templateUrl: './edit-navbar.component.html',
  styleUrl: './edit-navbar.component.css'
})
export class EditNavbarComponent {

    @Input() characterName: string = "";
    @Input() editorSteps: string[] = EDITOR_STEPS;

    isCollapsed = true;
}
