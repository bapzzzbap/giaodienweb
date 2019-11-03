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
      { "id": 1, "productname": "Caravan HS-4140", "price":115000, "imagesurl":"guitar.jpg", "description":"Guitar Caravan HS-4140 là dòng sản phẩm guitar acoustic được thiết kế tinh tế cùng với âm thanh đanh, rõ nét rất thích hợp để chơi đệm hát và dòng nhạc trẻ trung." },
      { "id": 2, "productname": "Đàn guitar Takamine P1D", "price":116000, "imagesurl":"guitar.jpg","description":"Đàn guitar Takamine P1D Tiếng đàn ngọt ngào, các chi tiết được tối ưu hóa nhờ công nghệ hiện đại, là sự trải nghiệm hoàn toàn xứng đáng cho bất cứ ai. Âm thanh cực kỳ ấm áp, độ cân bằng giữa các dải âm vang lên nhờ thân đàn Sapele với mặt gỗ tuyết tùng vùng Bắc Cực." },
      { "id": 3, "productname": "Boston GP-156 PE", "price":734000000, "imagesurl":"piano.jpg","description":"Đàn Piano Boston GP-156 PE âm thanh tao nhã dành cho những con người tinh te" },
      { "id": 4, "productname": "Cymbal Meinl BCS141620", "price":735000000, "imagesurl":"trong.jpg","description":"Roland V-Drum nổi tiếng khắp thế giới do âm thanh khác biệt và giàu cảm xúc. Và bây giờ, gia đình V-Drum bổ sung một sự thú vị mới với bộ trống HD-3 thế hệ mới, mở rộng khái niệm chơi trống. Bộ trống nhỏ gọn với công cụ đủ mạnh mẽ và truyền cảm mang lại sự thích thú và đủ thân thiện cho người mới chơi, các tay chơi trống và những người đam mê giải trí tại gia. Bạn không cần phải là một tay trống vẫn có thể thưởng thức trọn vẹn thiết bị thú vị, cực chất cho mọi nhà này." },
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

