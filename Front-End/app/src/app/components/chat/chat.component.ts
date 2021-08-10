import { Component, OnInit, Input } from '@angular/core';
import { SocketIoService } from 'src/app/services/socketio.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {Room} from 'src/app/models/room';
import {Chatline} from 'src/app/models/chatline';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() newChatParameter: string;
  room: string;
  backup:string[] = [];
  chatlines:string[] = [];
  newChat:string;
  private _roomsub: Subscription;
  

  title = 'socketio-angular';
  
  constructor(private socketService: SocketIoService) {}
  
  ngOnInit() {
    this._roomsub = this.socketService.currentRoom.subscribe(currentRoom => this.room = currentRoom);
    // this._roomsub = this.socketService.currentRoom.pipe(
    //   startWith({ id: '',})
    // ).subscribe(room => this.room = room);
    
    // this._roomsub = this.socketService.chatLogOfRoom.subscribe(recursive => this.chatlines = recursive.reverse());
    // this._roomsub = this.socketService.getNewMessage().subscribe((message:string)=> {
    //     this.chatlines.unshift(message);
    //   })

      this._roomsub = this.socketService.newMessage.subscribe((message:string)=> {
        this.chatlines.unshift(message);
      })
      

  }

  AddChat(message:string) {
    this.socketService.editChat(message);
  }

  // updateChat(){
  //   this.backup.forEach(element => {
  //     this.chatlines.unshift(element);
  //   });
  // }

  leaveRoom(){
    this.socketService.leaveRoom();
    this._roomsub.unsubscribe();
  }
}
