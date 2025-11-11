import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-build-control',
  imports: [CommonModule],
  templateUrl: './build-control.component.html',
  styleUrls: ['./build-control.component.css']
})
export class BuildControlComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() added = new EventEmitter<void>();
  @Output() removed = new EventEmitter<void>();

  onAdd(): void {
    this.added.emit();
  }

  onRemove(): void {
    this.removed.emit();
  }
}
