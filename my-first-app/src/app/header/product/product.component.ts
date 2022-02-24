import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventExecutedAdd = new EventEmitter();
  @Output() eventExecutedRemove = new EventEmitter();
  addtocart(){
    this.eventExecutedAdd.emit();
  }
  removenewitem(){
    this.eventExecutedRemove.emit();
  }

  show1 = false;
  
  showdesc(){
    if(this.show1==true){
      this.show1=false;
      return;
    }
    this.show1=true;
  }
}
