import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { OrderResponde } from '../../model/order';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket = io("ws://localhost:3000/", {})

  constructor(){}

  getOrder(){
    return new Observable<OrderResponde[]>( observable => {
      this.socket.on("server:loadOrder", (data)=>{
        observable.next(data)
      })
    })
  }
  /*private socket!: Socket;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.connect()
    }
  }

  private connect() {
    this.socket = io("ws://localhost:3000/", {
      transports: ['websocket'],
      reconnectionDelay: 3000,
    })
  }

  /*loadOrder(): Observable<any>{
    this.socket.on("server:loadOrder", ()=>{})
  }*/


  /*listen<T>(eventName: string): Observable<T> {
    return new Observable<T>(observer => {
      this.socket.on(eventName, (data: T) => observer.next(data));
      return () => this.socket.off(eventName);
    });
  }

  // Método para probar la conexión
  test(): Observable<any> {
    return new Observable(observable => {
      if (!this.socket) {
        console.error('Socket no está conectado');
        return;
      }

      this.socket.on('client:test', (message: any) => {
        observable.next(message);
      });

      // Desconectar cuando se complete
      return () => {
        if (this.socket) {
          this.socket.off('client:test');
        }
      };
    });
  }*/
}
