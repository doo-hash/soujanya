import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routeComponents } from './app-routing.module';
import { AppComponent } from './app.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptViewComponent } from './dept-view/dept-view.component';
import { DeptContactsComponent } from './dept-contacts/dept-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    routeComponents,
    PageNotFoundComponent,
    DeptDetailsComponent,
    DeptViewComponent,
    DeptContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
