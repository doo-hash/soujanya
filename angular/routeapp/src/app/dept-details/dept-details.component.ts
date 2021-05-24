import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'dept-details',
  template: `<h2>You have selected dept with id:{{deptId}}</h2>
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>
  <p><button (click)="showView()">View</button>
  <button (click)="showContacts()">Contacts</button>
</p>
<p>
  <button (click)="goPrevious()">Previous</button>
  <button (click)="goNext()">Next</button>
</p>
<div>
  <button (click)='gotoDepts()'>Back</button>
</div>
  `,
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {
  public deptId:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('dept_id');
    this.deptId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('dept_id');
      this.deptId=id;
    })
  }
  goPrevious(){
    let previd=parseInt(this.deptId)-1;
    this.router.navigate(['/depts',previd]);
  }
  goNext(){
    let nextid=parseInt(this.deptId)+1;
    this.router.navigate(['/depts',nextid]);
  }
  gotoDepts(){
    let sid=this.deptId?this.deptId:null;
    this.router.navigate(['/depts',{deptId:sid}]);
  }
  showView(){
    this.router.navigate(['view'],{relativeTo:this.route});
  }
  showContacts(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
