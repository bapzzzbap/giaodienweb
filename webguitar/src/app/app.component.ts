import { Component } from '@angular/core';
import {GuitarService} from 'src/app/DAL/guitar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webguitar';
  categories:any;
  constructor(private _guitar:GuitarService){}
  ngOnInit(){
    this._guitar.getAllcategories().subscribe(cate =>{
      this.categories=cate;
    });
  }
}
