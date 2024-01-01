import { Component, Input } from '@angular/core';

import { ShadowRun5ECharacter } from '../../../character/character';
import { AttributeName, MagicAttributeName } from '../../../character/interfaces/attribute.interface';

const normalAttributes = [AttributeName.Body, AttributeName.Agility, AttributeName.Reaction, AttributeName.Strength, AttributeName.Willpower, AttributeName.Logic, AttributeName.Intuition, AttributeName.Charisma]

const specialAttributes = [AttributeName.Edge, MagicAttributeName.Magic, MagicAttributeName.Resonance]

@Component({
  selector: 'app-attribute-step',
  templateUrl: './attribute-step.component.html',
  styleUrl: './attribute-step.component.css'
})
export class AttributeStepComponent {

    @Input() character!: ShadowRun5ECharacter;

    normalAttributes = normalAttributes;
    specialAttributes = specialAttributes;
}
