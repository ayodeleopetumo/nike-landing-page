import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { navLinks } from '../../constants';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './nav.component.html'
})
export class NavComponent {
  readonly navLinks = navLinks;
}
