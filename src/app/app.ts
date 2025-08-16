import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, About, Products, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cmh-website'); 

   scrollToSection(section: string){
    let contact =  document.getElementById(section)
    if(contact){
      contact.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}
