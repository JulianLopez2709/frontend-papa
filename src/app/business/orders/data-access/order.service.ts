import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../../model/food';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000';


  getOrderDay(){
    return this.http.get(`${this.apiUrl}/order/day`)
  }
  
}
