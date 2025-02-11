import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../../model/food';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) { }
  private apiUrl = 'http://localhost:3000';


  getAllFoods(): Observable<Food[]>{
    return this.http.get<Food[]>(`${this.apiUrl}/food`).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    return throwError(() => new Error(error.message || 'Error desconocido'));
  }
}
