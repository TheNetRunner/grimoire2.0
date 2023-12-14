import { Component, Input } from '@angular/core';

import { ShadowRun5ECharacter } from '../../models/character.model';

@Component({
  selector: 'app-technomancer-step',
  templateUrl: './technomancer-step.component.html',
  styleUrl: './technomancer-step.component.css'
})
export class TechnomancerStepComponent {

    @Input() character!: ShadowRun5ECharacter;
}
