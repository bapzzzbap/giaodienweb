import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListQuestionService {

  constructor(private http: HttpClient) { }
  listProject: any;
  getJSON(idSubject){
    return this.http.get('/manager/src/assets/db/Quizs/${idSubject}.json').subscribe(data => {
      this.listProject =data;

    });
  }
}
