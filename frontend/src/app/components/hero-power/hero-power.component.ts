import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-power',
  imports: [CommonModule],
  templateUrl: './hero-power.component.html',
  styleUrls: ['./hero-power.component.css']
})
export class HeroPowerComponent {
  @Input() name: string = '';
}
