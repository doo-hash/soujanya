import { Component } from '@angular/core';
import { DemoSrvcService } from './demo-srvc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exapp';
  public emps:any=[];
  constructor(private _newsevice:DemoSrvcService){}
  ngOnInit(){
    this.emps=this._newsevice.getEmps();
  }
}
