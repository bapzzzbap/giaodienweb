import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isShow=true;
  Listcart=[
    {
        "cartID": 1,
        "cartName": "LapTop",
        "price": 30000,
        "quality": 0,
        "imageUrl": "choi.jpg"
    },
    {
      "cartID": 2,
      "cartName": "Smart Phone",
      "price": 25000,
      "quality": 0,
      "imageUrl": "choi.jpg"
    },]
  constructor() { }

  ngOnInit() {
  }
Tongtien(){
  let s=0;
  this.Listcart.forEach(function(item)
  {
    s=s+item.price*item.quality;
  })
  return s;
}
Tang(id){
for(let i =0; i<this.Listcart.length;i++)
{
  if(this.Listcart[i].cartID===id){
    this.Listcart[i].quality++;
  }
}
}
Giam(id){
  for(let i =0; i<this.Listcart.length;i++)
  {
    if(this.Listcart[i].cartID===id){
      this.Listcart[i].quality--;
    }
  }
  }
}
