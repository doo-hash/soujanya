import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emplist',
  template:`
  <h2>Employee List</h2>
  <ul *ngFor="let e of employees">
  <li> {{e.ename}}</li>
  </ul>
  `,
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  public employees=[
    {"eid":101,"ename":"ssss","salary":15222},
    {"eid":102,"ename":"dddd","salary":15222},
    {"eid":103,"ename":"oooo","salary":15222},
    {"eid":104,"ename":"ffff","salary":15222},
    {"eid":105,"ename":"nnnn","salary":15222},
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
