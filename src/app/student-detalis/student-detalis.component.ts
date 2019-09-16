import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detalis',
  templateUrl: './student-detalis.component.html',
  styleUrls: ['./student-detalis.component.css']
})
export class StudentDetalisComponent implements OnInit {
  list: any;
  co: any;
  pid;
  cox;
  Liststudents =  [
    {
      "Id": 1,
      "FirstMidName": "Carson",
      "LastName": "Alexander",
      "EnrollmentDate": "2005-09-01",
      courses: 
        {
          "CourseID": "1050",
          "Title": "Chemistry",
          "Credits": "3"
        },
      enrollments: 
        {
          "StudentID": "1",
          "CourseID": "1050",
          "Grade": "A"
        }
    },
    {
      "Id": 2,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2002-09-01",
      courses: 
        {
          "CourseID": "4022",
          "Title": "Python",
          "Credits": "3",
        },
      enrollments: 
        {
          "StudentID": "1",
          "CourseID": "4022",
          "Grade": "C"
        }
    },
    {
      "Id": 3,
      "FirstMidName": "Arturo",
      "LastName": "Anand",
      "EnrollmentDate": "2003-09-01",
      courses: 
        {
          "CourseID": "4041",
          "Title": "Macroeconomics",
          "Credits": "3",
        },
      enrollments: 
        {
          "StudentID": "1",
          "CourseID": "4041",
          "Grade": "B"
        }
    },
    {
      "Id": 4,
      "FirstMidName": "Gytis",
      "LastName": "Barzdukas",
      "EnrollmentDate": "2002-09-01",
      courses: 
        {
          "CourseID": "1045",
          "Title": "Calculus",
          "Credits": "4",
        },
      enrollments: 
        {
          "StudentID": "2",
          "CourseID": "1045",
          "Grade": "B"
        }
    },
    {
      "Id": 5,
      "FirstMidName": "Yan",
      "LastName": "Li",
      "EnrollmentDate": "2002-09-01",
      courses: 
        {
          "CourseID": "3141",
          "Title": "DjAngo",
          "Credits": "4",
        },
      enrollments: 
        {
          "StudentID": "2",
          "CourseID": "3141",
          "Grade": "F"
        }
    },
    {
      "Id": 6,
      "FirstMidName": "Meredith",
      "LastName": "Alonso",
      "EnrollmentDate": "2001-09-01",
      courses: 
        {
          "CourseID": "3141",
          "Title": "DjAngo",
          "Credits": "4",
        },
      enrollments: 
        {
          "StudentID": "2",
          "CourseID": "2021",
          "Grade": "F"
        }
    },
    {
      "Id": 7,
      "FirstMidName": "Laura",
      "LastName": "Norman",
      "EnrollmentDate": "2003-09-01",
      courses: 
        {
          "CourseID": "2021",
          "Title": "Composition",
          "Credits": "3",
        },
      enrollments: 
        {
          "StudentID": "3",
          "CourseID": "1050",
          "Grade": "B"
        }
    },
    {
      "Id": 8,
      "FirstMidName": "Nino",
      "LastName": "Olivetto",
      "EnrollmentDate": "2005-09-01",
      courses: 
        {
          "CourseID": "2042",
          "Title": "Literature",
          "Credits": "4",
        },
      enrollments: 
        {
          "StudentID": "4",
          "CourseID": "4022",
          "Grade": "F"
        }
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.pid = +para.get('ID');

    });
    this.list = this.Liststudents.find(s => s.Id === this.pid);
  }

}


