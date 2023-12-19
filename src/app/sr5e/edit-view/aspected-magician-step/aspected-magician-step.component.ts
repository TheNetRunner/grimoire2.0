import { Component, Input } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/new-character.model';

@Component({
  selector: 'app-aspected-magician-step',
  templateUrl: './aspected-magician-step.component.html',
  styleUrl: './aspected-magician-step.component.css'
})
export class AspectedMagicianStepComponent {

    @Input() character!: ShadowRun5ECharacter;
}
