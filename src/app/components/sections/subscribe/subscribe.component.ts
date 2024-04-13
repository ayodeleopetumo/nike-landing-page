import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [ButtonComponent, ButtonComponent],
  templateUrl: './subscribe.component.html'
})
export class SubscribeComponent {}
