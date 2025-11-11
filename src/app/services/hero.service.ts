import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeroDetails, HeroPowersData } from '../models/hero.models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroDetailsSubject = new BehaviorSubject<HeroDetails>({
    powers: ['Superhuman Strength', 'Heat Vision', 'Superhuman Speed'],
    characteristics: {
      stamina: 0,
      strength: 0,
      speed: 0
    }
  });

  public heroDetails$: Observable<HeroDetails> = this.heroDetailsSubject.asObservable();

  constructor() {}

  getHeroDetails(): HeroDetails {
    return this.heroDetailsSubject.value;
  }

  updateHeroDetails(heroDetails: HeroDetails): void {
    this.heroDetailsSubject.next(heroDetails);
  }

  addPower(power: string): void {
    const currentDetails = this.heroDetailsSubject.value;
    if (!currentDetails.powers.includes(power)) {
      this.heroDetailsSubject.next({
        ...currentDetails,
        powers: [...currentDetails.powers, power]
      });
    }
  }

  removePower(power: string): void {
    const currentDetails = this.heroDetailsSubject.value;
    this.heroDetailsSubject.next({
      ...currentDetails,
      powers: currentDetails.powers.filter(p => p !== power)
    });
  }

  updateCharacteristic(characteristic: 'stamina' | 'strength' | 'speed', value: number): void {
    const currentDetails = this.heroDetailsSubject.value;
    this.heroDetailsSubject.next({
      ...currentDetails,
      characteristics: {
        ...currentDetails.characteristics,
        [characteristic]: Math.max(0, value)
      }
    });
  }
}
