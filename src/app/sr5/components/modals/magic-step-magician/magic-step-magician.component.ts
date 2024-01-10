import { Component, Input, Output, OnInit, inject } from '@angular/core';

import { ShadowRun5ECharacter } from '../../../character/character';

@Component({
  selector: 'app-magic-step-magician',
  templateUrl: './magic-step-magician.component.html',
  styleUrl: './magic-step-magician.component.css'
})
export class MagicStepMagicianComponent implements OnInit {

    @Input() character!: ShadowRun5ECharacter;

    drainTooltip: string = "";

    ngOnInit(): void {
        this.setDrainTooltip();
    }

    setDrainTooltip(): void {
        const drain = this.character.magician?.drain;

        if (drain) {
            const characterDrainValueOne = this.character.attributeManager.getAttributeTotalValue(drain[0]);
            const characterDrainValueTwo = this.character.attributeManager.getAttributeTotalValue(drain[1]);
            this.drainTooltip = `${drain[0]} (+${characterDrainValueOne}) + ${drain[1]} (+${characterDrainValueTwo})`;
        }
        
    }
}
