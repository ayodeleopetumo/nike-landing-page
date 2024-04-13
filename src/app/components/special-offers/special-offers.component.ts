import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './special-offers.component.html'
})
export class SpecialOffersComponent {}
