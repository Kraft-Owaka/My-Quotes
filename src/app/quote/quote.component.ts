import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'John Lennon', 'Life is what happens when you are busy making other plans.',new Date(2020,3,14)),
    new Quote(3,'Nelson Mandela','The greatest glory in living lies not in never falling, but in rising every time we fall.',new Date(1945,6,9)),
    new Quote(4,'Eleanor Roosevelt','If life were predictable it would cease to be life, and be without flavor.',new Date(1919,6,9)),
    new Quote(5,'Mother Teresa','Spread love everywhere you go. Let no one ever come to you without leaving happier.',new Date(2022,1,12)),
  ];

  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1); 
    }
  }
  constructor() { }
  ngOnInit() {
  }
}
