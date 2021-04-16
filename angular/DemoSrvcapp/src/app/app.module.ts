import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
