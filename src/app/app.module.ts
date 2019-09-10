import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { StudentComponent } from './student/student.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ListproductComponent,
    UserComponent,
    CartComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: ListproductComponent }, 
      {path: 'products', component:ListproductComponent},
      { path: 'products/:productId', component: ProductdetailComponent },
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
     
    ]) ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
