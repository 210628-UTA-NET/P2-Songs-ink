import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Room } from 'src/app/models/room';
import { Chatline } from '../models/chatline';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  currentRoom = this.socket.fromEvent<Room>('room');
  roomList = this.socket.fromEvent<string[]>('rooms');
  // chat = this.socket.fromEvent<string>('AddToChatBox');
  message$ : BehaviorSubject<string> = new BehaviorSubject('');
  rooms$ : BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private socket: Socket) { }

  getRoom(id: string) {
    this.socket.emit('getRoom', id);
  }

  getRooms() {
    this.socket.on('rooms', (room: string) => {
      this.rooms$.next(room);
    });
    return this.rooms$.asObservable();
  }

  addRoom() {
    this.socket.emit('addRoom', { id: this.roomId(), doc: '' });
  }

  editChat(chatline: string) {
    this.socket.emit('message', chatline);
  }

  getNewMessage = () => {
    this.socket.on('message', (message: string) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
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
