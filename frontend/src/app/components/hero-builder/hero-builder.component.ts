import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { HeroComponent } from '../hero/hero.component';
import { BuildControlsComponent } from '../build-controls/build-controls.component';
import { HeroService } from '../../services/hero.service';
import { HeroDetails } from '../../models/hero.models';

@Component({
  selector: 'app-hero-builder',
  imports: [CommonModule, HeroComponent, BuildControlsComponent],
  templateUrl: './hero-builder.component.html',
  styleUrls: ['./hero-builder.component.css']
})
export class HeroBuilderComponent implements OnInit, OnDestroy {
  heroDetails: HeroDetails = {
    powers: [],
    characteristics: {
      stamina: 0,
      strength: 0,
      speed: 0
    }
  };

  private subscription: Subscription = new Subscription();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.subscription = this.heroService.heroDetails$.subscribe(
      details => this.heroDetails = details
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
