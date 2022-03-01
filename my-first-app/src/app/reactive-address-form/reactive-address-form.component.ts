import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {
  myForm:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name:['Dhruv', Validators.required],
      email:['abc@gmail.com',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]]   

    })
  }
  onSubmit(form:FormGroup){
    console.log('valid?',form.valid);
    console.log('FirstName', form.value.fname );
    console.log('LastName', form.value.lname );
    console.log('Age',form.value.age);
  }

}
