import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quotes:Quote []= [
    new Quote (1,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Quote (2,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Quote (3,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Quote (4,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Quote (5,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Quote (6,'Watch finding Nemo','Find an online version and watch merlin find his son'),
    new Quote (7,'Watch finding Nemo','Find an online version and watch merlin find his son'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
