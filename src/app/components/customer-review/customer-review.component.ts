import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { reviews } from '../../constants';

@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './customer-review.component.html'
})
export class CustomerReviewComponent {
  readonly reviews = reviews;
}
