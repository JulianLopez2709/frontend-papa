import { Component, Input } from '@angular/core';
import { Food } from '../../../model/food';

@Component({
  selector: 'app-card-food',
  standalone: true,
  imports: [],
  templateUrl: './card-food.component.html',
  styles: ``
})
export class CardFoodComponent {
  @Input() food !: Food
}
