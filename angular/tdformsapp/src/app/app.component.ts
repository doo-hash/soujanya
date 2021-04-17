import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdformsapp';
  model=new user();
  onSubmit(form:any){
    console.log(form.value);
  }
}

export class user{
  public fname:string='';
  public lname:string='';
  public emailid:string='';
  public dob:string='';
  public age?:number;
  public gndr:string='';
  public mobile?:number;
  public psd:string='';
  public langs1:string='';
  public proglang:string='';
  public lksdslks:string='';
}