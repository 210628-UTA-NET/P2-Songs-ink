import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Room } from 'src/app/models/room';
import { Chatline } from '../models/chatline';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  currentRoom = this.socket.fromEvent<Room>('room');
  roomList = this.socket.fromEvent<string[]>('rooms');

  constructor(private socket: Socket) { }

  getRoom(id: string) {
    this.socket.emit('getRoom', id);
  }

  addRoom() {
    this.socket.emit('addRoom', { id: this.roomId(), doc: '' });
  }

  editChat(chatline: Chatline) {
    this.socket.emit('editChat', chatline);
  }

  private roomId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
