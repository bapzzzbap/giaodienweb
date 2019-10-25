import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Student } from './student';
@Component({
  selector: 'app-loginmember',
  templateUrl: './loginmember.component.html',
  styleUrls: ['./loginmember.component.css']
})
export class LoginmemberComponent implements OnInit {
  
  formStudent  =
    {
    username: 'teonv',
    username1: 'pheonv',
    username2: 'nopt',
    password: 'iloveyou',
   };
  students: Student[] =[
    {
        "username": "teonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Tèo",
        "email": "teonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1995-12-21",
        "schoolfee": "1500000",
        "marks": "0"
    },
    {
        "username": "pheonv",
        "password": "iloveyou",
        "fullname": "Nguyễn Văn Chí Phèo",
        "email": "pheonv@fpt.edu.vn",
        "gender": "true",
        "birthday": "1985-10-11",
        "schoolfee": "2500000",
        "marks": "0"
    },
    {
        "username": "nopt",
        "password": "iloveyou",
        "fullname": "Phạm Thị Nở",
        "email": "nopt@fpt.edu.vn",
        "gender": "false",
        "birthday": "1993-05-15",
        "schoolfee": "2000000",
        "marks": "0"
    }
]
  constructor(private router:Router) { }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e,student: Student) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	//this.formStudent = {
    //  username: student.username,
  //    password:student.password,
   // }
  	if(username == this.formStudent.username ||username == this.formStudent.username1 || username == this.formStudent.username2  && password == this.formStudent.password) {
      this.router.navigate(['home']);
    }
    else if(password!=this.formStudent.password){
      alert("Wrong Password!");
    }
  }

}