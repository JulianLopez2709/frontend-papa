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
  orders: OrderResponde[] = [];
  totalDay = 0
  orderDay !: any

  constructor(private socket: WebSocketService, private http: OrderService) { }

  ngOnInit() {
    this.socket.connect()

    this.socket.getOrder().subscribe((data) => {
      const previousLength = Number(localStorage.getItem('orderCount')) || 0;

      if (data.length > previousLength) {
        this.showNotification();
      }
      localStorage.setItem('orderCount', String(data.length))
      this.orders = data
    })

    this.loadOrderDay()

    /*this.socket.listen<Order[]>('server:loadOrder').subscribe((order) => {
      console.log('Nueva orden recibida:', order);
      this.orders = order
    });*/

  }

  loadOrderDay() {
    this.http.getOrderDay().subscribe((data) => {
      this.orderDay = data;
    });
  }


  update(data: { orderId: number, status: string }) {
    this.socket.patchStatusOrderService(data)
    this.loadOrderDay()
  }

  ngOnDestroy(): void {
    this.socket.disconnect()
  }


  showNotification() {
    const audio = new Audio('audio/notification.mp3');
    audio.play();
    if (Notification.permission === 'granted') {
      new Notification('Nueva Orden', { body: 'Se ha recibido una nueva orden en la cocina 🍽️' });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Nueva Orden', { body: 'Se ha recibido una nueva orden en la cocina 🍽️' });
        }
      });
    }
  }

}
