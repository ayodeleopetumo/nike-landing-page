import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-products-card',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="flex flex-1 flex-col w-full max-sm:w-full">
      <img [ngSrc]="imgURL" [alt]="name" class="w-[280px] h-[280px]" width="280" height="280" />

      <div class="mt-8 flex justify-start gap-2.5">
        <img ngSrc="assets/icons/star.svg" alt="star rating" width="24" height="24" />
        <p class="font-montserrat text-xl leading-normal text-slate-grewy">(4.5)</p>
      </div>

      <h3 class="mt-2 text-2xl leading-normal font-semibold font-palanquin">{{ name }}</h3>
      <p class="mt-2 font-semibold font-montserrat leading-normal text-coral-red text-2xl">{{ price }}</p>
    </div>
  `
})
export class PopularProductsCardComponent {
  @Input() imgURL!: string;
  @Input() name!: string;
  @Input() price!: string;
}
