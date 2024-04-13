import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgOptimizedImage, NgClass],
  template: `
    <button
      class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full shadow-3xl hover:bg-white hover:text-slate-gray transition-colors duration-150"
      [ngClass]="[backgroundColor ? altButtonClasses : primaryButtonClasses, fullWidth ? 'w-full' : '']">
      {{ label }}

      @if (iconURL) {
        <img
          class="ml-2 rounded-full w-5 h-5"
          [ngSrc]="'assets/icons/' + iconURL"
          alt="arrow right icon"
          width="20"
          height="20" />
      }
    </button>
  `
})
export class ButtonComponent {
  @Input() label = 'Button Text';
  @Input() iconURL!: string;
  @Input() backgroundColor!: string;
  @Input() borderColor!: string;
  @Input() textColor!: string;
  @Input() fullWidth!: string;

  primaryButtonClasses = 'bg-coral-red text-white border-coral-red';
  altButtonClasses = `${this.backgroundColor} ${this.borderColor} ${this.textColor}`;
}
