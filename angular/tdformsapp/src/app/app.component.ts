import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdformsapp';
  model=new user();
  proglangs:string[]=['C','Java','C++','Javascript','HTML','CSS','Bootstrap/Sass','Angular','React','Python'];
 @ViewChild('signupfrm') form:any;
  onSubmit(){
    if(this.form.valid)
    console.log(this.form.value);
    console.log("form validated");
  }
}

export class user{
 constructor( public name={fname:'',lname:''},
  public emailid:string='',
  public dob:string='',
  public age?:number,
  public gndr:string='',
  public mobile?:number,
  public psd:string='',
  public confirmpsd:string='',
  public langs1=["telugu","hindi","english"],
  public proglang:string='',
  public lksdslks:string=''){
  
  }
}