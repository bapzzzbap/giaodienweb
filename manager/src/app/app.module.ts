import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmemberComponent } from './loginmember/loginmember.component';
import { HomeComponent } from './home/home.component';
import { QuizsComponent } from './quizs/quizs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginmemberComponent,
    HomeComponent,
    QuizsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
