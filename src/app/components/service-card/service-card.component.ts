import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div class="w-11 h-11 justify-center items-center bg-coral-red rounded-full flex">
        <img [ngSrc]="imgURL" [alt]="label" width="24" height="24" />
      </div>
      <h3 class="mt-5 font-palanquin text-3xl leading-normal font-bold">{{ label }}</h3>
      <p class="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{{ subtext }}</p>
    </div>
  `
})
export class ServiceCardComponent {
  @Input() subtext!: string;
  @Input() label!: string;
  @Input() imgURL!: string;
}
