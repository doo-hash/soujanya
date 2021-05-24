import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {DeptsComponent} from './depts/depts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptViewComponent } from './dept-view/dept-view.component';
import {DeptContactsComponent} from './dept-contacts/dept-contacts.component';

const routes: Routes = [
  {path:'employees', component:EmployeesComponent},
  {path:'depts',component:DeptsComponent,
  children:[
    {path:'',redirectTo:'/employees',pathMatch:'full'},
    {path:'view',component:DeptViewComponent},
    {path:'contact',component:DeptContactsComponent},
  ]},

  {path:'depts/:dept_id',component:DeptDetailsComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[EmployeesComponent,
                              DeptsComponent,
                              PageNotFoundComponent,
                              DeptDetailsComponent,
                              DeptViewComponent,
                              DeptContactsComponent
                            ];