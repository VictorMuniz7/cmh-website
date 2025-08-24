import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
    @Output() scrollToSection = new EventEmitter<string>();

  toSection(section: string){
    this.scrollToSection.emit(section)
  }

}
