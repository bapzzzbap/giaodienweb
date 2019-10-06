import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { StudentComponent } from './student/student.component';
import { FormtinhComponent } from './formtinh/formtinh.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

RouterModule.forRoot([
  { path: '', component:  HomeComponent },
  { path: 'form1', component:  UserComponent },
  { path: 'form2', component:  FormComponent },
  { path: 'form3', component:  FormtinhComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
])

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent,
    StudentComponent,
    FormtinhComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
