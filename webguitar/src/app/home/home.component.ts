import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ActivatedRoute} from '@angular/router';
import{GuitarService} from '../DAL/guitar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: any;
  guitar: any;


  guitars : any ;
  listguitar: any;
  features;
  cid:number;
  constructor(private _guitar:GuitarService, private route:ActivatedRoute) { }

  ngOnInit() {
  this.LoadData();
}
LoadData(){
  this.route.paramMap.subscribe(para =>{
    this.cid=+para.get('cid');
  });
  if(this.cid !=0 ){
    this._guitar.getAllguitar().subscribe(data=>{
      this.guitar=data;
      this.guitar=this.guitars.filter(p=>p.id==this.cid);
    });
  }
   else{
     this._guitar.getAllguitar().subscribe(data=>{
       this.guitar=data;
     });
   }
   this._guitar.getAllcategories().subscribe(data=>{
    this.lists=data
  });
}
// addToCart(guitar){
//   window.alert('Your product has been added to the cart!');
//   this._guitar.addToCart(this.guitars);
// }
}




