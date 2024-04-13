import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-super-quality',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './super-quality.component.html'
})
export class SuperQualityComponent {}
