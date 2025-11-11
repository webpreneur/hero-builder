import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { HeroBuilderComponent } from './components/hero-builder/hero-builder.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent, HeroBuilderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Hero Builder';
}
