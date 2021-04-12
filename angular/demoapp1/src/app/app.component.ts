
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ViewChild} from '@angular/core';
//export class User{
  
  //constructor(public name1?:string,public email1?:string, public password?:string, public mobile?:number){}}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp1';
  
  langs:string[]=['English','German','French','Hindi'];
  model: signupForm = new signupForm();
  @ViewChild('f') form:any;
  onSubmit(){
    if(this.form.valid){
      console.log("form submitted");
      this.form.reset();
    }
  }
}
class signupForm{
  constructor(public firstname:string='',
  public lastname:string='',
  public email1:string='',
  public psd:string='',
  public language:string=''){}
}
























  /*  model=new User();
  onSubmit(form:any){
    console.log(form.value);
  }
*/

  //template driven forms
  //courses:string[]=["angular","python","c","java"];
 /*
 //NGFOR, NGIF, NGSWITCH
 isvalid:boolean=true;
  changeValue(valid:any){
    this.isvalid=valid;
  } 
  studs:student[]=[{
    Sid:101,Sname:"ravi",Course:"angular",duration:"40 days"},
    {Sid:102,Sname:"radha",Course:"angular-react",duration:"80 days"},
    {Sid:101,Sname:"ravi",Course:"angular",duration:"40 days"},
    {Sid:101,Sname:"ravi",Course:"angular",duration:"40 days"},
    {Sid:101,Sname:"ravi",Course:"angular",duration:"40 days"}
  ];

  public choose="";
  setValue(drp:any){
    this.choose=drp.target.value;
  }*/

/*
//NGSWITCH
class student{
  Sid?:Number;
  Sname?:String;
  Course?:String;
  duration?:String;
}*/

