import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }

  numberoflikes : number=0
  numberofdislikes : number=0
     likebuttonclick(){
     this.numberoflikes++;
}
dislikebuttonclick(){
  this.numberofdislikes++;
}
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
