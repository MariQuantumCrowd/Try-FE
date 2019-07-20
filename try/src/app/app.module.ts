import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './_http/request-interceptor';
import { FormsModule } from '@angular/forms';
// import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsComponent } from './contents/contents.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    HeaderComponent,
    FooterComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    HomeEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // NgxSpinnerModule
  
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
