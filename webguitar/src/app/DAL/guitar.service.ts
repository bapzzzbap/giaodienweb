import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  items:any=[];
  url='/assets/db/guitar.json';
  constructor(private http:HttpClient) { }
  getAllguitar(){
    return this.http.get('/assets/db/guitar.json')
  }
  getAllcategories(){
    return this.http.get('/assets/db/categories.json')
  }
  addToCart(guitar) {
    this.items.push(guitar);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}

