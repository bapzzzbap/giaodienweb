import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  showFormEdit: boolean = false;
  constructor( private http:HttpClient) { }
  student:any;

  loginstudent:any;
  configUrl='https://cuong-dev1-api.herokuapp.com/studentsTwo';
  Students: any;
  username;
  email;
  formStudent = {
    username: null,
    email: null,
    password: null,
    fullname:null,
    birthday:null,
    gender:true
  }
  getConfig() {
    return this.http.get(this.configUrl);
  }


  ngOnInit() {
 this.getConfig().subscribe(data => {
      this.Students = data
    })
    
  }

check(){
  this.Students.forEach(element => {

    if (element.username == this.username && element.email == this.email) {
       return (this.formStudent.password = element.password) ;
    }
  });

}
addStudent(){
  this.showFormEdit= true;  
}
}
