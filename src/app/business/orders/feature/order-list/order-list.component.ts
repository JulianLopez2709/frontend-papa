import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NewOrderCardComponent } from '../../ui/new-order-card/new-order-card.component';
import { TodayOrderCardComponent } from '../../ui/today-order-card/today-order-card.component';
import { AsyncPipe } from '@angular/common';
import { WebSocketService } from '../../../../services/websocket/web-socket.service';
import { Subscription } from 'rxjs';
import { OrderResponde } from '../../../../model/order';
import { OrderService } from '../../data-access/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [NewOrderCardComponent, TodayOrderCardComponent, AsyncPipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit, OnDestroy {

  textEmpty = ""
  private alimentosSubscription!: Subscription;
  orders: OrderResponde[] = [];
  orderDay !: any

  constructor(private socket: WebSocketService, private http : OrderService) { }

  ngOnInit() {
    this.socket.getOrder().subscribe((data)=>{
        this.orders = data
    })

    this.http.getOrderDay().subscribe((data)=>{
      console.log(data)
        this.orderDay = data
    })

    /*this.socket.listen<Order[]>('server:loadOrder').subscribe((order) => {
      console.log('Nueva orden recibida:', order);
      this.orders = order
    });*/

  }

  ngOnDestroy(): void {

  }

}
