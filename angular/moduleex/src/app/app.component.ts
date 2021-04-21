import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moduleex';
  nos:number[]=[1,2,3,4,5,6,7,8,9,10];
  gndrs:string[]=['male','female'];
  prog_langs=[{'lngs':'C','id':0},
                      {'lngs':'Python','id':1},
                      {'lngs':'Php','id':2},
                      {'lngs':'Angular','id':3},
                      {'lngs':'React','id':4},
                      {'lngs':'Java','id':5},
                      {'lngs':'HTML','id':6},
                      {'lngs':'CSS','id':7},
                      {'lngs':'Javascript','id':8},
                      {'lngs':'Bootstrap','id':9},
                      {'lngs':'Ajax','id':10},
                      {'lngs':'Jquery','id':11},
                      {'lngs':'others','id':12}];
  model=new sfrm();
  onSubmit(){
    alert(this.model);
  }
}
export class sfrm{
  public choosen?:number;
  public gndr?:string;
  public langs:Object='';
}
