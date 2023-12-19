import { Component, Input } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/new-character.model';

@Component({
  selector: 'app-adept-step',
  templateUrl: './adept-step.component.html',
  styleUrl: './adept-step.component.css'
})
export class AdeptStepComponent {

    @Input() character!: ShadowRun5ECharacter;
}
