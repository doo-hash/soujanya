import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depts',
  template:`<h2>Departments</h2>
  <ul>
    <li *ngFor='let d of dept' (click)="onselect(d)">{{d.dept_id}} -- {{d.dept_name}}</li>
  </ul>
  `,
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {
  dept=[
    {dept_id:101,dept_name:'Admin'},
    {dept_id:102,dept_name:'HR'},
    {dept_id:103,dept_name:'Sales'},
    {dept_id:104,dept_name:'Manager'},
    {dept_id:105,dept_name:'Marketing'},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onselect(d:any){
    this.router.navigate(['/depts',d.dept_id]);
  }
}
