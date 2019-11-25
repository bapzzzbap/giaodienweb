import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  checkdangnhap: boolean = false;
  public username = '';
  id;
  email;
  configUrl='https://cuong-dev1-api.herokuapp.com/studentsTwo';
  Students: any;
  getConfig() {
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) {
    this.getConfig().subscribe(data => {
      this.Students = data;
    })
   }
}
