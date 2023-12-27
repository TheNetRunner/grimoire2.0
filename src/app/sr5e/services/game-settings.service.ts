import { Injectable } from '@angular/core';

import { LevelOfPlay } from '../models/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {

    getStartingKarma(levelOfPlay: LevelOfPlay): number { 
        switch(levelOfPlay) {
            case LevelOfPlay.Prime:
                return 35;
            case LevelOfPlay.Street:
                return 13;
            default:
                return 25;
        }
    }

    getMaxStartingKarma(levelOfPlay: LevelOfPlay): number {
        switch(levelOfPlay) {
            case LevelOfPlay.Prime:
                return 70;
            case LevelOfPlay.Street:
                return 26;
            default:
                return 50;
        }
    }
}
