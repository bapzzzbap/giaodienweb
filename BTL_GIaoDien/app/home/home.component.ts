import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ListQuestionService} from '../server/list-question.service';
import { DataService} from '../server/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private http:HttpClient, private List:ListQuestionService, private dss:DataService,private router: Router ) { }
    Subjects: any;
    pid;
  itemsperpage = 4;
  curpage = 1;

  ngOnInit() {
    this.List.getSub('Id').subscribe(data => this.Subjects = data);
  }
check(){
  if(this.dss.checkdangnhap==false)
  {
    alert('Vui lòng đăng nhập trước khi thi')
    this.router.navigate(["/home"]);
  }
}

}
