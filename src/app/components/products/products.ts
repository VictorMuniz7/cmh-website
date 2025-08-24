import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class Products {
  slides: string[] = []

  currentIndex = 0;

  static readonly fade = trigger('fade', [
    transition(':increment, :decrement', [
      style({ opacity: 0, transform: 'scale(0.98)' }),
      animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ])
  ])

  constructor(){
    this.slides = [
      'product1.png',
      'product2.png',
      'product3.png',
      'product4.png',
      'product5.png',
      'product6.png',
      'product7.png',
      'product8.png',
      'product9.png',
    ]
  }

  prevSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

   nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

}
