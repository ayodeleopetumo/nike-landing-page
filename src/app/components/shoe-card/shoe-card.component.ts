import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shoe-card',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  template: `
    <div
      class="border-2 rounded-xl cursor-pointer max-sm:flex-1"
      [ngClass]="{
        'border-coral-red': bigShoeImg === imgURL.bigShoe,
        'border-transparent': bigShoeImg !== imgURL.bigShoe
      }"
      (click)="handleClick()">
      <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img [ngSrc]="imgURL.thumbnail" alt="Shoe collection" width="127" height="103.34" class="object-contain" />
      </div>
    </div>
  `
})
export class ShoeCardComponent {
  @Input() imgURL!: { bigShoe: string; thumbnail: string };
  @Input() bigShoeImg!: string;
  @Output() changeBigShoeImage = new EventEmitter<string>();

  handleClick() {
    if (this.bigShoeImg !== this.imgURL.bigShoe) {
      this.changeBigShoeImage.emit(this.imgURL.bigShoe);
    }
  }
}
