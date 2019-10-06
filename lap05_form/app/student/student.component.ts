import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  sinhvien ={
    hovaten:null,
    ngaysinh:null,
    gioitinh:null,
    diem:0,
    hocluc:'rot'
  }
  
  constructor() { }

  ngOnInit() {
   
  }
  kiemtra(){
      if(this.sinhvien.diem<5)
      this.sinhvien.hocluc="rot";
      else
      this.sinhvien.hocluc="dau";
      return this.sinhvien.hocluc;
  }
}
