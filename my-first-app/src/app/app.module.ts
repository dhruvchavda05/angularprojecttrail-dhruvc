import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimerComponent } from './timer/timer.component';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './header/product/product.component';
import { DatetimeService } from './datetime.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { ReactiveAddressFormComponent } from './reactive-address-form/reactive-address-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,  
    TimerComponent,
    CartComponent,
    ProductComponent,
    ReactiveFormComponent,
    ReactFormComponent,
    ReactiveAddressFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DatetimeService ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

export class component { 
  constructor(){}
  // user: any={
  //   "email": '',
  //   "password":'',
  //   "city":'',
  //   "zip":''
  // };
  // onSubmitofform(){
  //   console.log(this.user);
  // }
  // onSubmit(){
    
  // }
  // onsubmitofform(){

  // }
}
