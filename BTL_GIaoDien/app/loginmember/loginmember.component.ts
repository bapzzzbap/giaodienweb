import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { ListuserService } from '../server/listuser.service';
@Component({
  selector: 'app-loginmember',
  templateUrl: './loginmember.component.html',
  styleUrls: ['./loginmember.component.css']
})
export class LoginmemberComponent implements OnInit {
  username;
  password;
  //dangnhap
  showCheckall: boolean = false;
  showCheck: boolean = false;
  showCheck1: boolean = false;
  showCheckpass: boolean = false;
  //dangki
  showChecksu1: boolean = false;
  showChecksu2: boolean = false;
  showChecksu3: boolean = false;
  showChecksu4: boolean = false;
  constructor(private router: Router, private http: HttpClient, private listStudents: ListuserService) { }
  configUrl='https://cuong-dev1-api.herokuapp.com/studentsTwo';
  Students: any;
  getConfig() {
    return this.http.get(this.configUrl);
  }
  ngOnInit() {
    //dang nhap
    this.getConfig().subscribe(data => {
      this.Students = data
      console.log(data)
    })

    //dang ki
    this.listStudents.getStudents().subscribe(data => {
      this.listStudent = data;
    });
  }

  check() {

    this.Students.forEach(element => {
    
      if (this.username == null && this.password == null )                                  
      { 
        return this.showCheckall=true; 
      } 
      if (this.password == null )                                  
      { 
        this.showCheckpass=true;
        return this.showCheckall=false; 
      } 
      if (element.username == this.username && element.password == this.password) {
        this.router.navigate(["/home"])
        alert('Wellcome '+ element.fullname)
        return true;
      }
      if (element.username == this.username && this.password != element.password) {
        this.showCheck1=true;
        return this.showCheck=false;
      }
      if (element.username != this.username && this.password=="") {
        this.showCheckall=false;
        this.showCheckpass=false;
        return this.showCheck=true;
      }
     
    });
    // if (this.username == null) {
    //   return this.showCheck=true;
    // }
  }







//dang ki

listStudent: any;

formStudent = {
  username: null,
  email: null,
  password: null,
  fullname:null
}


studentLogin() {
  let check = true;
  if(this.formStudent.username == null && this.formStudent.password == null && this.formStudent.email == null){
    this.showChecksu1=true
    this.showChecksu2=true
    this.showChecksu3=true
    this.showChecksu4=true
    return ;
  }
  if(this.formStudent.fullname == null){
    return this.showChecksu1=true;
  }
  if(this.formStudent.username == null){
    return this.showChecksu1=true;
  }
  if(this.formStudent.password == null){
    return this.showChecksu2=true;
  }
  if(this.formStudent.email == null){
    return this.showChecksu3=true;
  }
  this.listStudent.forEach(item => {
    if (this.formStudent.username == item.username) {
      alert("username da duoc dang ky!");
      return check = false;;
    }
    if (this.formStudent.email == item.email) {
      alert("email da duoc dang ky!");
      check = false;
      return;
    }
  });
  if (check = true) {
    this.postStudent();
  }
}

postStudent() {
  let newStudent = {
    Fullname: this.formStudent.fullname,
    UserName: this.formStudent.username,
    Email: this.formStudent.email,
    Password: this.formStudent.password
  }
  this.http.post("https://cuong-dev1-api.herokuapp.com/studentsTwo", newStudent).subscribe(data => {
    alert("Đăng kí thành công!");
    this.router.navigate(['/home']);
  });
}

}