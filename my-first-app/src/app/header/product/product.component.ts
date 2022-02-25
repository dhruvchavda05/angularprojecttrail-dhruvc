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
  show2 = false;
  show3 = false;
  show4 = false;
  show5 = false;
  show6 = false;
  show7 = false;
  showdesc(){
    if(this.show1==true){
      this.show1=false;
      return;
    }
    this.show1=true;
  }
  
  showdesc2(){
    
    if(this.show2==true){
      this.show2=false;
      return;
    }
    this.show2=true;
  }
  showdesc3(){
    
    if(this.show3==true){
      this.show3=false;
      return;
    }
    this.show3=true;
  }
  showdesc4(){
    
    if(this.show4==true){
      this.show4=false;
      return;
    }
    this.show4=true;
  }
  showdesc5(){
    
    if(this.show5==true){
      this.show5=false;
      return;
    }
    this.show5=true;
  }
  showdesc6(){
    
    if(this.show6==true){
      this.show6=false;
      return;
    }
    this.show6=true;
  }  
  showdesc7(){
    
    if(this.show7==true){
      this.show7=false;
      return;
    }
    this.show7=true;
  }
}
