import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  students = [
    {
    fullName:'Nguyễn Văn Tèo',
    birthday:'20-01-1999',
    gender :'Nam',
    photo :'khabanh.jpg',
    mark:8.5
    },
    {
    fullName: 'Phan thị nở',
    birthday: '20-12-1999',
    gender: 'Nữ',
    photo :'nu.png',
    mark: 8.5
    },
    {
      fullName: 'Nguyễn khá Bảnh',
      birthday: '20-01-2000',
      gender: 'Nam',
      photo :'khabanh.jpg',
      mark: 8.5
      },
  ]

}
