import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count = 0;
  addto() {
    this.count++;
  }
  removeto() {
    if (this.count == 0) {
      return;
    }
    else {
      this.count--;
    }
  }

  cartItems = [
    {

      "id": 5,
      "name": "Menda",
      "ManufacturingLocation": "Nagpur, Maharastra",
      "Price": "180 /- Kg",
      "qa": "200 KG",
      "ps": "60KG",

    },
  ]

  totalQty = 0;
  bill = 0;
  addedtocart(product: any) {

    this.cartItems.push(product);
    this.count++;
    this.totalQty += Number(product.Qty);
    this.bill += Number(product.Qty) * Number(product.Price);
  }
}
