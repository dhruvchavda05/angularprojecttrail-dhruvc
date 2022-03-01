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

  
  Products : any=[  
    {
      "id": 1,
      "name": "Wheat Floar",
      "ManufacturingLocation": "Hisar, Hariyana",
      "Price":340,
      "qa": "200 KG",
      "ps": "80KG",
    },
    {
      "id": 2,
      "name": "Cheese",
      "ManufacturingLocation": "Faridabad, Panjab",
      "Price":440,
      "qa":" 400 kg",
      "ps": "50KG",
    },
    {
      "id": 3,
      "name": "Paneer",
      "ManufacturingLocation": "Hisar, Hariyana",
      "Price":500,
      "qa": "700 KG",
      "ps": "100KG",
    },
    {
      "id": 4,
      "name": "Butter",
      "ManufacturingLocation": "Mahesana, Gujarat",
      "Price":200,
      "qa": "100 KG",
      "ps": "30KG",
    },
    {
      "id": 5,
      "name": "Menda",
      "ManufacturingLocation": "Nagpur, Maharastra",
      "Price":180,
      "qa": "200 KG",
      "ps": "60KG",
    }
    ]

    @Output() parent = new EventEmitter<any>();
    // addToCart(product:any){
    //   this.parent.emit(parent);
    // }
    count=0;
    totalQty=0;
    bill=0;
    addedtocart(product:any){
      this.Products.push(product);
      this.count++;
      this.totalQty+=Number(product.qty);
      this.bill+=Number(product.Qty)*Number(product.price);
    }
    wheatcost=0;
    wheatquantity=0;
   wheat(){
     this.wheatcost=this.wheatcost+this.Products[0].Price;
   } 
   cheescost=0;
   cheesquantity=0;
   cheese(){
    this.cheescost=this.cheescost+this.Products[1].Price;
   }
   panercost=0;
   panerquantity=0;
   paner(){
    this.paner=this.paner+this.Products[2].Price;
   }
   buttercost=0;
   butterquantity=0;
   butter(){
     this.buttercost=this.buttercost+this.Products[3].Price;
   }
   mendacost=0;
   mendaquantity=0;
   menda(){
    this.mendacost=this.mendacost+this.Products[4].Price;
   }
}
