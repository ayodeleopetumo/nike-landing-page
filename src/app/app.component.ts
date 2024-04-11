import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CustomerReviewComponent,
  FooterComponent,
  HeroComponent,
  NavComponent,
  PopularProductsComponent,
  ServicesComponent,
  SpecialOffersComponent,
  SubscribeComponent,
  SuperQualityComponent
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PopularProductsComponent,
    SuperQualityComponent,
    ServicesComponent,
    SpecialOffersComponent,
    CustomerReviewComponent,
    SubscribeComponent,
    FooterComponent,
    HeroComponent,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
