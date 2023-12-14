import { Component, Input } from '@angular/core';
import { EDITOR_STEPS } from '../../common/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    @Input() characterName: string = "";
    @Input() editorSteps: string[] = EDITOR_STEPS;

    isCollapsed = true;
}
