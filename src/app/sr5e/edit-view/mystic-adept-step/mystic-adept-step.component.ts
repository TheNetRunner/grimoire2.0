import { Component, Input } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/new-character.model';

@Component({
  selector: 'app-mystic-adept-step',
  templateUrl: './mystic-adept-step.component.html',
  styleUrl: './mystic-adept-step.component.css'
})
export class MysticAdeptStepComponent {

    @Input() character!: ShadowRun5ECharacter;
}
