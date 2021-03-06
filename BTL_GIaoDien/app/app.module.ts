import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmemberComponent } from './loginmember/loginmember.component';
import { HomeComponent } from './home/home.component';
import { QuizsComponent } from './quizs/quizs.component';
import { InfoComponent } from './info/info.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { AskComponent } from './ask/ask.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginmemberComponent,
    HomeComponent,
    QuizsComponent,
    InfoComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ContactComponent,
    AskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'info', component: InfoComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: 'loginmember', component: LoginmemberComponent },
      { path: 'login', component: LoginmemberComponent },
      { path: 'quiz/:cid', component: QuizsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'overview', component: AskComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
