import { NgModule,Component } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exampleapp';
  langs:string[]=['English','German','French','Hindi','Arabic'];

  myForm:FormGroup= new FormGroup({
    fullname:new FormGroup({
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required)
    }),
    email:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    language:new FormControl('')
  });
}
