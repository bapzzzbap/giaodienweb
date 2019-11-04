import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listquizs, quizs } from '../quizs/listquizs';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListQuestionService {

  constructor(private http: HttpClient) { }
  url = 'assets/db/Subjects.json';


  getSub(Id:string):Observable<listquizs[]>{
    return this.http.get<listquizs[]>(this.url);
  }


  getQuizs(Id:string):Observable<quizs[]>{
    return this.http.get<quizs[]>(`/assets/db/Quizs/`+Id+`.json`);
  }
  
  }
