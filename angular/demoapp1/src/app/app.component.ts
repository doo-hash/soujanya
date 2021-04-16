
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
public c1="classColor classSize";
b:boolean=false;
val={
  classColor:true,
  classSize:true,
  classText:!this.b
}
fontSize:string='25px';
isTrue:boolean=false;
obj={
  color:'purple',
  fontSize:'30px',
  fontstyle:'italic'
}
empData:any=[
  {eid:101,ename:"nitish",desn:"executive",salary:10000},
  {eid:102,ename:"shilpa",desn:"executive",salary:10000},
  {eid:103,ename:"ravi",desn:"executive",salary:10000},
  {eid:104,ename:"sneeha",desn:"executive",salary:10000},
  {eid:105,ename:"susmitha",desn:"executive",salary:10000},
];
constructor(){console.log(this.empData);}
dispData(emp:any):void{
  console.log(emp);
}

i:number=200;
j:number=100;
Add(){return this.i+this.j;}
Subtract(){return this .i-this.j;}
Prod(){return this.i*this.j}

imgUrl="C:\Users\admin\OneDrive\Desktop\soujanya\flowers\flower.jpg";

onButtonClick(){
  console.log('this is event binding');
  alert('this is event binding example');
}

msg:any="this is two way binding";
str="this is angular example";
dt=new Date(2021,3,15);

myobj:{[key:number]:string}={2:"souj",3:"soumya",1:"vanaja"};
mymaparr=new Map([[2,"souji"],[3,"soumya"],[1,"soujjjj"]]);
}















  /*langs:string[]=['English','German','French','Hindi'];
  model: signupForm = new signupForm();
  @ViewChild('f') form:any;
  onSubmit(){
    if(this.form.valid){
      console.log("form submitted");
      this.form.reset();
    }
  }*/

/*class signupForm{
  constructor(public firstname:string='',
  public lastname:string='',
  public email1:string='',
  public psd:string='',
  public language:string=''){}
}*/
























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

