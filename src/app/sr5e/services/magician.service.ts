import { Injectable, inject } from '@angular/core';

import { ShadowRun5ECharacter } from '../models/character.model';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class MagicianService {
    private characterService = inject(CharacterService);
}
