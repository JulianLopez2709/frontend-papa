import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../../../model/food';
import { OrderResponde } from '../../../../model/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-order-card',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './new-order-card.component.html',
  styles: `
    .container{
      max-width: 100%; 
      background: yellow;
      padding: 15px;
      background : white;
      border-radius: 20px;
      color:black;
    }

    .avatar-user{
      background: gray;
      height: 42px;
      width: 42px;
      border-radius: 100%;
    }

    .detail-food{
      display:flex;
      margin-bottom: 8px;
    }

    .img-food{
      margin-right: 7px;
      background-size:cover;  
      background: #D9D9D9;
      height: 80px;
      width: 80px;
      border-radius: 100%;
    }

    @media (max-width: 1200px) {
      .detail-food{
        display: none;
      }
    }
    .btn-canceled{
    background : white;
    }

    .btn-canceled{
      background : white;
      color : red;
    }
    .btn-confirmed{
      background : green;
      color : white;
    }

    .btn-canceled:hover{
      background : red;
      color:white;
    }

    .btn-confirmed:hover{
      background:#2e942f;
      color : white;
      }

  `
})
export class NewOrderCardComponent {
  constructor(private datePipe: DatePipe) { }
  @Input() order!: OrderResponde;

  @Output() clicked = new EventEmitter<{ orderId: number, status: string }>()


  formatDate(data: string) {
    return this.datePipe.transform(data, 'dd MMM yyyy, hh:mm a')
  }

  handleClick(orderId: number, status: string) {
    this.clicked.emit({ orderId, status })
  }


  getFoodImage(foodType: string): string {
    switch (foodType) {
      case "drink":
        return "drink.jpg";
      case "icecream":
        return "icecream.jpg";
      default:
        return "fries.jpg";
    }
  }
}
