import { Component, OnInit } from '@angular/core';
import { DataService} from'../server/data.service'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  constructor(private dss:DataService) { }
  student:any;
  
loginstudent:any;
  ngOnInit() {
this.student=this.dss.Students;

this.loginstudent=this.student.find(x=>{
  return x.id==this.dss.id;
})

    
  }
  xuat(){
    if (this.loginstudent.gender==='true') {
      return "Nam"
    }
    if (this.loginstudent.gender!='true')
    return "Nữ"
  }

}
