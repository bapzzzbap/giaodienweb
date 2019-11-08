import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listsubjects, quizs } from '../quizs/list';
import { Observable} from 'rxjs';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class ListQuestionService {

  constructor(private http: HttpClient, private af: AngularFireDatabaseModule) { }
  url = 'assets/db/Subjects.json';


  getSub(Id:string):Observable<listsubjects[]>{
    return this.http.get<listsubjects[]>(this.url);
  }


  getQuizs(Id:string):Observable<quizs[]>{
    return this.http.get<quizs[]>(`/assets/db/Quizs/`+Id+`.json`);
  }
  
  // getSubjects():Observable<listquizs[]>{
  //   return this.af.get<listquizs[]>('/subjects');
  // }

  }
