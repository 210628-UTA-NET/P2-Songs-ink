import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SocketIoService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit, OnDestroy {
  rooms:string[] = [];
  // rooms: Observable<string[]>;
  currentRoom: string;
  private _roomsub: Subscription;

  constructor(private SocketService: SocketIoService) { }

  ngOnInit(): void {
    this._roomsub = this.SocketService.currentRoom.subscribe(room => this.currentRoom = room);
    this.SocketService.getRooms().subscribe((room:string)=> {
      this.rooms.push(room)
    });
    this._roomsub = this.SocketService.roomList.subscribe(rooms => this.rooms = rooms);
  }

  ngOnDestroy() {
    this._roomsub.unsubscribe();
  }

  loadRoom(id: string) {
    this.SocketService.getRoom(id);
  }
  addRoom() {
    this.SocketService.addRoom();
  }
}
