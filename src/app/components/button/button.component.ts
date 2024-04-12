import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <button
      class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {{ label }}
      <img
        class="ml-2 rounded-full w-5 h-5"
        [ngSrc]="'assets/icons/' + iconURL"
        alt="arrow right icon"
        width="20"
        height="20" />
    </button>
  `
})
export class ButtonComponent {
  @Input() label = 'Button Text';
  @Input() iconURL!: string;
}
