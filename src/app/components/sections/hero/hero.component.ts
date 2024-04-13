import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { shoes, statistics } from '../../constants';
import { ButtonComponent } from '../button/button.component';
import { ShoeCardComponent } from '../shoe-card/shoe-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage, ShoeCardComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly statistics = statistics;
  readonly shoes = shoes;
  bigShoeImg = 'assets/images/big-shoe1.png';

  changeShoeImage(selectedShoe: string) {
    this.bigShoeImg = selectedShoe;
  }
}
