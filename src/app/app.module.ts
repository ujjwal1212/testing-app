import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CounterComponent } from './counter/counter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CounterComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
