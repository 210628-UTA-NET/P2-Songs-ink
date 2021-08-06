import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SocketIoService } from 'src/app/services/socketio.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {Room} from 'src/app/models/room';
import {Chatline} from 'src/app/models/chatline';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() newChatParameter: string;
  room: Room;
  chatlines:string[] = [];
  newChat:string;
  private _roomsub: Subscription;
  

  title = 'socketio-angular';
  
  constructor(private socketService: SocketIoService) {}
  
  ngOnInit() {
    // this._roomsub = this.socketService.currentRoom.pipe(
    //   startWith({ id: '',})
    // ).subscribe(room => this.room = room);

      this.socketService.getNewMessage().subscribe((message:string)=> {
        this.chatlines.unshift(message);
      })

  }
  ngOnDestroy() {
    this._roomsub.unsubscribe();
  }
  AddChat(message:string) {
    this.socketService.editChat(message);
  }
}
