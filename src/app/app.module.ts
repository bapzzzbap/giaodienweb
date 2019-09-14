import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListstudentsComponent } from './liststudents/liststudents.component';
import { RouterModule } from '@angular/router';
import { StudentDetalisComponent } from './student-detalis/student-detalis.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    ListstudentsComponent,
    StudentDetalisComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot([ 
      { path: '', 	component: ListstudentsComponent }, 
      {path: 'liststudents', component:ListstudentsComponent},
      { path: 'liststudents/:ID', component: StudentDetalisComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
     
    ]) ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
