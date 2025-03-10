import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { OrderResponde } from '../../model/order';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  socket = io(environment.BASE_URL, {})

  constructor() { }

  getOrder() {
    return new Observable<OrderResponde[]>(observable => {
      this.socket.on("server:loadOrder", (data) => {
        observable.next(data)
      })
    })
  }

  patchStatusOrderService(data: {}) {
    this.socket.emit("client:patchStatus", data)
  }

  disconnect(){
    this.socket.disconnect()
  }

  connect(){
    this.socket.connect()
  }
  /*private socket!: Socket;

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
