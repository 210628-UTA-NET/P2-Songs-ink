import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketIoService } from 'src/app/services/socketio.service';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {Room} from 'src/app/models/room';
import {Chatline} from 'src/app/models/chatline';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  room: Room;
  chatline:Chatline;
  private _roomsub: Subscription;

  title = 'socketio-angular';
  
  constructor(private socketService: SocketIoService) {}
  
  ngOnInit() {
    this._roomsub = this.socketService.currentRoom.pipe(
      startWith({ id: '',})
    ).subscribe(room => this.room = room);
  }

  ngOnDestroy() {
    this._roomsub.unsubscribe();
  }
  editChat() {
    this.socketService.editChat(this.chatline);
  }
}
