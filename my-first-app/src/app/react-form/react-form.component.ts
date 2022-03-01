import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  myForm:any;

  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    //   this.myForm=new FormGroup({
    //   name: new FormControl('Dhruv'),
    //   email: new FormControl('abc@gmail.com')
    // }); 
    this.myForm=this.fb.group({
      name:['Dhruv',Validators.required],
      email:['abc@gmail.com',[Validators.required,Validators.minLength(3)]]
    });
  }
  onSubmit(form: FormGroup){
    console.log('valid?',form.valid);
    console.log('Name', form.value.name );
    console.log('E-mail', form.value.name );
  }
}
