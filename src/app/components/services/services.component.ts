import { Component } from '@angular/core';
import { services } from '../../constants';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  readonly services = services;
}
