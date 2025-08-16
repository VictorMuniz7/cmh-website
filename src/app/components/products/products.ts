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
index: any;


  constructor(){
    this.slides = [
      'assets/slides/1.png',
      'assets/slides/2.png',
      'assets/slides/3.png',
      'assets/slides/4.png',
      'assets/slides/5.png',
      'assets/slides/6.png',
      'assets/slides/7.png',
      'assets/slides/8.png',
      'assets/slides/9.png',
    ]
  }

  prevSlide(){
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

   nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

}
