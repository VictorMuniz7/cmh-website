import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() scrollToSection = new EventEmitter<string>();

  toSection(section: string){
    this.scrollToSection.emit(section)
  }
}
