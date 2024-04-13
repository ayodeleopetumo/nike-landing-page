import { Component } from '@angular/core';
import { products } from '../../constants';
import { PopularProductsCardComponent } from '../popular-products-card/popular-products-card.component';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [PopularProductsCardComponent],
  template: `
    <div class="max-container max-sm:mt-12">
      <div class="flex flex-col justify-start gap-5">
        <h2 class="text-4xl font-palanquin font-bold">Our <span class="text-coral-red">Popular</span> Products</h2>
        <p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with out sought-after selections.Discover a world of comfort, design,
          and value
        </p>
      </div>
      <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        @for (product of products; track product) {
          <app-popular-products-card [imgURL]="product.imgURL" [name]="product.name" [price]="product.price" />
        }
      </div>
    </div>
  `
})
export class PopularProductsComponent {
  readonly products = products;
}
