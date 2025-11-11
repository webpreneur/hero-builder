import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Characteristics } from '../../models/hero.models';
import { HeroPowerComponent } from '../hero-power/hero-power.component';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, HeroPowerComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() heroPowers: string[] = [];
  @Input() heroCharacteristics: Characteristics = {
    stamina: 0,
    strength: 0,
    speed: 0
  };
}
