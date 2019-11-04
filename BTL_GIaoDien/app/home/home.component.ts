import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listquizs } from '../quizs/listquizs';
import {ListQuestionService} from '../server/list-question.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private http:HttpClient, private List:ListQuestionService) { }
    Subjects: any;
    pid;
    // configUrl = 'assets/db/Subjects.json';
    // getConfig() {
    //     return this.http.get(this.configUrl);
    //   }
  itemsperpage = 4;
  curpage = 1;

  ngOnInit() {

    this.List.getSub('Id').subscribe(data => this.Subjects = data);
    this.Subjects= this.Subjects.find(p=>p.Id=== this.pid);
  }

}
