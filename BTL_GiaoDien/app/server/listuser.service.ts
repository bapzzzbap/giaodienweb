import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListuserService {

  studentURL="https://cuong-dev1-api.herokuapp.com/studentsTwo";

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.studentURL);
  }
}
