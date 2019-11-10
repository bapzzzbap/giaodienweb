import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {ListQuestionService} from '../server/list-question.service';
import { listsubjects } from '../quizs/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private http:HttpClient, private List:ListQuestionService) { }
    Subjects: any;
    pid;
  itemsperpage = 4;
  curpage = 1;

  ngOnInit() {
    this.List.getSub('Id').subscribe(data => this.Subjects = data);
  }

}
