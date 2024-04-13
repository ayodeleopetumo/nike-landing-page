import { Component } from '@angular/core';
import { services } from '../../../constants';
import { ServiceCardComponent } from '../../service-card/service-card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent],
  template: `
    <div class="max-container flex justify-center flex-wrap gap-9">
      @for (service of services; track service) {
        <app-service-card [imgURL]="service.imgURL" [label]="service.label" [subtext]="service.subtext" />
      }
    </div>
  `
})
export class ServicesComponent {
  readonly services = services;
}
