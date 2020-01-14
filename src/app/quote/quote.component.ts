import { Component, OnInit } from '@angular/core';
import { Quote } from'../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote []= [
    {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
    {id:2,name:'Buy Cookies',description:'Find an online version and watch merlin find his son'},
    {id:3,name:'Get new Phone Case',description:'Find an online version and watch merlin find his son'},
    {id:4,name:'Get Dog Food',description:'Find an online version and watch merlin find his son'},
    {id:4,name:'Get Dog Food',description:'Find an online version and watch merlin find his son'},
    {id:5,name:'Solve math homework',description:'Find an online version and watch merlin find his son'},
    {id:6,name:'Plot my world domination plan',description:'Find an online version and watch merlin find his son'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
