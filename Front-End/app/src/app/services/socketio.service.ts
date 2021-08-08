import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Room } from 'src/app/models/room';
import { Chatline } from '../models/chatline';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  roomListstatic:string[]=[];
  currentRoom = this.socket.fromEvent<string>('room');
  roomList = this.socket.fromEvent<string[]>('room list');
  chatLogOfRoom = this.socket.fromEvent<string[]>('EnterChatBox');
  message$ : BehaviorSubject<string> = new BehaviorSubject('');
  rooms$ : BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private socket: Socket) { }
  

  getRoom(id: string) {
    
    this.socket.emit('getRoom', id);
  }

  // getRooms() {
  //   this.socket.on('room', (room: string) => {
  //     this.rooms$.next(room);
  //   });
  //   return this.rooms$.asObservable();
  // }

  addRoom() {
    this.socket.emit('addRoom', this.roomId());
    
  }
  setUpRoomList() {
    this.roomList.subscribe(list=> this.roomListstatic=list);
  }

  editChat(chatline: string) {
    this.socket.emit('userName', "Chase");
    this.socket.emit('message', chatline);
  }

  getNewMessage = () => {
    this.socket.once('message', (message: string) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  }

  leaveRoom(){
    this.socket.emit("leave room");
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
