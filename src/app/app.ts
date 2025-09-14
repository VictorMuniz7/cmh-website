import { Component, OnInit, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, About, Products, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('cmh-website'); 

  constructor(private meta: Meta){}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Fundada em 2015 em Maringá-PR, a CMH fornece mais de 2.000 itens médico-hospitalares, incluindo injetáveis, saneantes, oncológicos e demandas judiciais.'
    })
  }
  
   scrollToSection(section: string){
    let contact =  document.getElementById(section)
    if(contact){
      contact.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }
}
