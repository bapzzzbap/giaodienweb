import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{GuitarService} from '../DAL/guitar.service';
import { Product } from '../entities/product.entity';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
product : any;
listproduct : any;
features;
  constructor( private _guitar:GuitarService, private route:ActivatedRoute,  private productService: GuitarService) { }
  ngOnInit() {
    this.products = this.productService.findAll();
    const pid=+this.route.snapshot.paramMap.get('pid');
    this._guitar.getAllguitar().subscribe(p=>{
      this.listproduct=p;
      this.product=this.listproduct.find(x=>x.id==pid);
      this.features=this.product.newfeatures;
      console.log(this.features);
    })
  }

}
