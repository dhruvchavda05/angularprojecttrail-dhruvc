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
  count=0;
  addto(){
    this.count++;
  }
  removeto(){
    if(this.count==0){
      return;
    }
    else{
      this.count--;
    }
  }
}
