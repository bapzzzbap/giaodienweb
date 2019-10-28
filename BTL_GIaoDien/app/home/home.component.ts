import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private http:HttpClient) { }
    Subjects: any;
    configUrl = 'assets/db/Subjects.json';
    getConfig() {
        return this.http.get(this.configUrl);
      }
  itemsperpage = 4;
  curpage = 1;

  ngOnInit() {

    this.getConfig().subscribe(data=>{
        this.Subjects=data
      })
    }
  }


