import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../../../model/food';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://lapapaback-production.up.railway.app';


  getOrderDay(){
    return this.http.get(`${this.apiUrl}/order/day`)
  }
  
}
