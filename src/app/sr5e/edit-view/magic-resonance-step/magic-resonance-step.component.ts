import { Component, Input } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/character.model';

@Component({
  selector: 'app-magic-resonance-step',
  templateUrl: './magic-resonance-step.component.html',
  styleUrl: './magic-resonance-step.component.css'
})
export class MagicResonanceStepComponent {

    @Input() character!: ShadowRun5ECharacter;
}
