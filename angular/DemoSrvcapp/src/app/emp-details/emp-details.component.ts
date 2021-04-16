import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp-details',
  template: `<h2>Employee Details</h2>
  <ul *ngFor="let e of employees">
  <li>{{e.eid}} - {{e.ename}} - {{e.salary}}</li>
</ul>`,
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  public employees=[
    {"eid":101,"ename":"aaaaa","salary":14000},
    {"eid":102,"ename":"qqqqq","salary":14000},
    {"eid":103,"ename":"wwwww","salary":14000},
    {"eid":104,"ename":"xxxxx","salary":14000},
    {"eid":105,"ename":"zzzzz","salary":14000},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
