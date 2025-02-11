import { Component, OnInit } from '@angular/core';
import { FoodService } from './data-acess/food.service';
import { CardFoodComponent } from './ui/card-food/card-food.component';
import { Observable } from 'rxjs';
import { Food } from '../model/food';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardFoodComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit{
  foodList$ : Food[] = []


  constructor(private service : FoodService){}

  ngOnInit(): void {
    this.service.getAllFoods().subscribe({
      next : (response)=>{
        this.foodList$ = response
      },
      error : (error)=>{
        console.log(error)
      }
    })
  }
}
