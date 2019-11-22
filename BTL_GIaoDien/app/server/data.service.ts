import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  checkdangnhap: boolean = false;
  public username = '';
  constructor() { }
}
