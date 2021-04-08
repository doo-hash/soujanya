
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp1';
  
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
  }
}
class student{
  Sid?:Number;
  Sname?:String;
  Course?:String;
  duration?:String;
}

