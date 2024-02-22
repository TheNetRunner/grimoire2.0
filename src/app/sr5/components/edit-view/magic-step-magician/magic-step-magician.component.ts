import { Component, Input, Output, OnInit, inject } from '@angular/core';

import { Shadowrun5ECharacter } from '../../../character/shadowrun-5e-character';

@Component({
  selector: 'app-magic-step-magician',
  templateUrl: './magic-step-magician.component.html',
  styleUrl: './magic-step-magician.component.css'
})
export class MagicStepMagicianComponent implements OnInit {

    @Input() character!: Shadowrun5ECharacter;

    drainTooltip: string = "";

    ngOnInit(): void {
    }
}
