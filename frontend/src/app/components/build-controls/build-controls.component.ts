import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildControlComponent } from '../build-control/build-control.component';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-build-controls',
  imports: [CommonModule, BuildControlComponent],
  templateUrl: './build-controls.component.html',
  styleUrls: ['./build-controls.component.css']
})
export class BuildControlsComponent {
  constructor(private heroService: HeroService) {}

  onAddCharacteristic(type: 'stamina' | 'strength' | 'speed'): void {
    const currentDetails = this.heroService.getHeroDetails();
    const currentValue = currentDetails.characteristics[type];
    this.heroService.updateCharacteristic(type, currentValue + 1);
  }

  onRemoveCharacteristic(type: 'stamina' | 'strength' | 'speed'): void {
    const currentDetails = this.heroService.getHeroDetails();
    const currentValue = currentDetails.characteristics[type];
    this.heroService.updateCharacteristic(type, currentValue - 1);
  }
}
