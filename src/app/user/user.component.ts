import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Listuser=[
    {
        "Id": 1,
        "Firstname": "Nguyễn",
        "Lastname": "A",
        "Email": "nguyena123@gmail.com",
    },
    {
      "Id": 2,
      "Firstname": "Ngô",
      "Lastname": "B",
      "Email": "nguyezzxzxna123@gmail.com",
    },
    {
      "Id": 3,
      "Firstname": "Lê",
      "Lastname": "D",
      "Email": "zxczxc@gmail.com",
    },
    {
      "Id": 4,
      "Firstname": "Khanh",
      "Lastname": "Minh",
      "Email": "zczxzxc@gmail.com",
    },
    {
      "Id": 5,
      "Firstname": "Anh",
      "Lastname": "Vũ",
      "Email": "nguyzxczxczxcna123@gmail.com",
    },
]
  constructor() { }

  ngOnInit() {
  }

}
