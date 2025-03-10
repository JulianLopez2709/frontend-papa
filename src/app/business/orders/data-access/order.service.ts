import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) { }

  private apiUrl = environment.BASE_URL;


  getOrderDay(){
    return this.http.get(`${this.apiUrl}/order/day`)
  }
  
}
