import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListQuestionService } from '../server/list-question.service';
import { ActivatedRoute } from '@angular/router';
import { quizs } from './list';
import { QuizService } from '../server/quiz.service';
import { Question } from '../model/question';
import { Option } from '../model/option';
@Component({
  selector: 'app-quizs',
  templateUrl: './quizs.component.html',
  styleUrls: ['./quizs.component.css']
})
export class QuizsComponent implements OnInit {
  constructor(private http: HttpClient, private listQuestion: ListQuestionService, private route: ActivatedRoute) { }
  Subjects: any;
  quizss: quizs[] = [];
  pid;
  //get cau tl
  answers = [];
  point = 0;
  //phan trang 
  page = 1;
  rowpage = 1;
  // hien thi time gian
  showTime = true;
  counter = 0;
  setSecond = 300;
  interval = null;
  onShowPage = false;
  resultPoint = false;
  showPoint = false;
  showStart = false;
  isDisabled = false;
  // itemsperpage = 1;
  // curpage = 1;


id


  ngOnInit() {

    this.route.paramMap.subscribe(para => {
      const Id = para.get('cid');
      this.listQuestion.getQuizs(Id).subscribe(data => this.quizss = data)
      this.id = para.get('cid')
      console.log(this.id)
    });
  
    this.listQuestion.getSub('Id').subscribe(data => this.Subjects = data);
    this.dongho();

  }


  //lấy điểm
  pointTest() {
    var sum = 0;
    for (var i = 0; i < this.quizss.length; i++) {
      if (this.answers[i] == this.quizss[i].AnswerId) {
        sum += this.quizss[i].Marks;
        this.point = sum;
      }
    }
  }
  prePage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  nextPage() {
    if (this.quizss.length / this.rowpage > this.page) {
      this.page++;
    }
  }

  firstPage() {
    this.page = 1;
  }

  lastPage() {
    this.page = this.quizss.length;
  }
  dongho() {
    var minute = 50;
    var second = 0;
    var clear = setInterval(function () {
      if (minute == 0 && second == 0) {
        console.log(this.outOfTime)
        document.getElementById('dongho').style.display = 'none'
        clearInterval(clear);
        this.endTime();
      }
      else {
        second -= 1
        if (second < 0) {
          minute -= 1;
          second = 59;
        }
      }
    }, 1000)
  }
  startTime() {
    this.onShowPage = true;
    this.showTime = false;
    this. isDisabled = true;
    clearInterval(this.interval);
    var timer = document.getElementById('timer');
    timer.innerHTML = this.convertTime(this.setSecond - this.counter);
    this.interval = setInterval(() => {
      this.counter++;
      timer.innerHTML = this.convertTime(this.setSecond - this.counter);
      if ((this.setSecond - this.counter) <= 0) {
        clearInterval(this.interval);
        this.setSecond = 300;
        this.counter = 0;
        timer.innerHTML = "Hết Thời Gian Làm Bài";
        this.endTime();
      }
    }, 1000);
  }
  convertTime(s) {
    var timer = document.getElementById('timer');
    var min = Math.floor(s / 60);
    var sec = s % 60;
    var minute = (min < 10) ? "0" + min : min;
    var sencond = (sec < 10) ? "0" + sec : sec;
    return minute + "'" + ':' + sencond;
  }
  endTime() {
    this.resultPoint = false;
    this.showPoint = true;
    clearInterval(this.interval);
    document.getElementById('timer-2').innerHTML = this.convertTime(this.counter);
    document.getElementById('result').style.display = 'block';
    document.getElementById('training').style.display = 'none';
  }
  questionCount(){
    return this.quizss.length;
  }
  nameQuestion(){
    return this.Subjects[1].Name;
  }
}




