import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';

export const environment = {  
	production: false,  
	SOCKET_ENDPOINT: 'http://localhost:3000'
};

@Injectable({
  providedIn: 'root'
})


export class SocketioService {

  socket: Socket<DefaultEventsMap, DefaultEventsMap>;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, {transports: ['websocket']});
    // this.socket = io('http://localhost:3000');
  }

  disconnect() {
    if(this.socket) {
      this.socket.disconnect();
    }
  }
}
