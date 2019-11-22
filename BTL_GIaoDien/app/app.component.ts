import { Component, OnInit } from '@angular/core';
import { DataService } from './server/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bap';
  constructor(private ds: DataService, private router: Router) { }
  Username;
  ngOnInit() {
  }
  getisShow() {
    if (this.ds.checkdangnhap == true) {
      this.Username = this.ds.username;
      return false;
    }
    else {
      return true;
    }
  }
  exit() {
    this.ds.checkdangnhap = false;
    alert('Ban da dang xuat')
    this.router.navigate(['/dangnhap'])
  }
}


