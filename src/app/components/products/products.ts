import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  slides: string[] = []

  currentIndex = 0;

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
