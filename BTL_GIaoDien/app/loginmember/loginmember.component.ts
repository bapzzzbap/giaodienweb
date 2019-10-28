import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loginmember',
  templateUrl: './loginmember.component.html',
  styleUrls: ['./loginmember.component.css']
})
export class LoginmemberComponent implements OnInit {
  username: null;
  password: null;
  constructor(private router: Router, private http: HttpClient) { }
  configUrl = 'assets/db/Students.json';
  Students: any;
  getConfig() {
    return this.http.get(this.configUrl);
  }
  ngOnInit() {
    this.getConfig().subscribe(data => {
      this.Students = data
      console.log(data)
    })
  }

  check() {
    let ga = false;
    this.Students.forEach(element => {
      if (element.username == this.username && element.password == this.password) {
        alert('ok')
        ga = true;
        this.router.navigate(["/home"])
      }
    });
    if (ga == false)
      alert('ga')

  }

}