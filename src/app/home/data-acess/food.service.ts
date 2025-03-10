import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../../model/food';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }
  private apiUrl = environment.BASE_URL;


  getAllFoods(): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.apiUrl}/food`).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    return throwError(() => new Error(error.message || 'Error desconocido'));
  }
}
