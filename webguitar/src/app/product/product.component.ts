import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{GuitarService} from '../DAL/guitar.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product : any;
listproduct : any;
features;
  constructor( private _guitar:GuitarService, private route:ActivatedRoute) { }

  ngOnInit() {
    const pid=+this.route.snapshot.paramMap.get('pid');
    this._guitar.getAllguitar().subscribe(p=>{
      this.listproduct=p;
      this.product=this.listproduct.find(x=>x.id==pid);
      this.features=this.product.newfeatures;
      console.log(this.features);
    })
  }

}
