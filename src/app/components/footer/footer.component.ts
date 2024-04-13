import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { footerLinks, socialMedia } from '../../constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly socialMedia = socialMedia;
  readonly footerLinks = footerLinks;
}
