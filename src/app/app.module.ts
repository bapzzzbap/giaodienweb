import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListstudentsComponent } from './liststudents/liststudents.component';
import { RouterModule } from '@angular/router';
import { StudentDetalisComponent } from './student-detalis/student-detalis.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    ListstudentsComponent,
    StudentDetalisComponent,
    ProductdetailComponent,
    ListproductComponent,
    UserComponent,
    CartComponent,
    StudentComponent
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
