import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListQuestionService} from '../server/list-question.service';
@Component({
  selector: 'app-quizs',
  templateUrl: './quizs.component.html',
  styleUrls: ['./quizs.component.css']
})
export class QuizsComponent implements OnInit {
    constructor(private http:HttpClient, private listQuestion: ListQuestionService) { }
    Subjects: any;
    quizs: any;
    configUrl = 'assets/db/Subjects.json';
    configUrl1 = 'assets/db/Quizs/ADBS.json';
    //${}
    getConfig() {

        return this.http.get(this.configUrl);
      }
      getConfig1() {
        return this.http.get(this.configUrl1);
      }
  itemsperpage = 1;
  curpage = 1;

  ngOnInit() {
    
      // console.log(this.listQuestion.getJSON('ADBS'));
   
    this.getConfig().subscribe(data=>{
        this.Subjects=data
      })
      this.getConfig1().subscribe(data=>{
        this.quizs=data
        console.log(data)
      })
    }
    }
    
  