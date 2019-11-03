import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../entities/product.entity';
@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  private products: Product[];


  items:any=[];
  url='/assets/db/guitar.json';
  constructor(private http:HttpClient) { 
    this.products = [
      { "id": 1, "productname": "Caravan HS-4140", "price":115000, "imagesurl":"guitar.jpg" },
      { "id": 2, "productname": "Đàn guitar Takamine P1D", "price":116000, "imagesurl":"guitar.jpg" },
      { "id": 3, "productname": "Boston GP-156 PE", "price":734000000, "imagesurl":"guitar.jpg" },
      { "id": 4, "productname": "Cymbal Meinl BCS141620", "price":735000000, "imagesurl":"guitar.jpg" },
  ]; 
  }


  findAll(): Product[] {
    return this.products;
}

find(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id == id) {
            return i;
        }
    }
    return -1;
}



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

