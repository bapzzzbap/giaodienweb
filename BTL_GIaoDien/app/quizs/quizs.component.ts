import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ListQuestionService} from '../server/list-question.service';
import { ActivatedRoute} from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';
@Component({
  selector: 'app-quizs',
  templateUrl: './quizs.component.html',
  styleUrls: ['./quizs.component.css']
})
export class QuizsComponent implements OnInit {
    constructor(private http:HttpClient, private listQuestion: ListQuestionService,private route:ActivatedRoute) { }
    Subjects: any;
    quizs: any;
    pid;
    //url='https://test-de763.firebaseio.com/';
    //configUrl = 'assets/db/Subjects.json';
    // getConfig() {

    //    return this.http.get(this.configUrl);

    //   }

  itemsperpage = 1;
  curpage = 1;
  quiz1 ={
      "Id": null,
      "hocluc": null
  }
  

  ngOnInit() {
   
    // this.getConfig().subscribe(data=>{
    //     this.Subjects1=data
    //   })

    this.route.paramMap.subscribe(para => {
      const Id = para.get('cid');
      this.listQuestion.getQuizs(Id).subscribe(data => this.quizs = data)
    });

    this.listQuestion.getSub('Id').subscribe(data => this.Subjects = data);
    this.Subjects= this.Subjects.find(p=>p.Id=== this.pid);
  }
     
//   kiemtra(){
//     if(this.quiz1.Id==this.quizs.AnswerId)
//     this.quizs.hocluc=this.quiz1.Id;
//     else
//     this.quizs.hocluc="dau";
//     return this.quizs.hocluc;
// }
    }

    
    
    
  