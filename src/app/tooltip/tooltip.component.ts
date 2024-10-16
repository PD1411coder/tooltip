import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TooltipComponent {
  @Input() tooltipText: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  isVisible: boolean = false;
  isClickMode: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // Show tooltip on hover
  showTooltip() {
    if (!this.isClickMode) {
      this.isVisible = true;
    }
  }

  // Hide tooltip when the mouse leaves (only for hover mode)
  hideTooltip() {
    if (!this.isClickMode) {
      this.isVisible = false;
    }
  }

  // Toggle tooltip visibility on click
  toggleTooltip() {
    this.isClickMode = true;
    this.isVisible = true;
  }

  // Close tooltip when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isClickMode && !this.el.nativeElement.contains(event.target)) {
      this.isVisible = false;
      this.isClickMode = false;
    }
  }

  // Close tooltip manually via close button
  closeTooltip() {
    this.isVisible = false;
    this.isClickMode = false;
  }
}
