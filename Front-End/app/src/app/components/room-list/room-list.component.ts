import { Component, OnInit, OnDestroy, Input, AfterViewInit, AfterViewChecked, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SocketIoService } from 'src/app/services/socketio.service';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit, OnDestroy, AfterViewChecked {
  
  rooms:string[];
  currentRoom: string;
  private _roomsub: Subscription;
  private _roomsub2: Subscription;
  // isVisible: boolean=false;

  constructor(private SocketService: SocketIoService) { 
  }

  ngOnInit(): void {
    let rooms2:string[];
    this._roomsub = this.SocketService.currentRoom.subscribe(room => this.currentRoom = room);
    // this.SocketService.getRooms().subscribe((room:string)=> {
    //   this.rooms.push(room)
    // });
    this.SocketService.setUpRoomList();
    this._roomsub2 = this.SocketService.roomList.subscribe(rooms => this.rooms = rooms);
    if (!this.rooms) {
      this.rooms=this.SocketService.roomListstatic;
    }
    
  }

  ngAfterViewChecked(){
  }

  loadRoom(id: string) {
    this.SocketService.getRoom(id);
  }
  addRoom() {
    this.SocketService.addRoom();
  }

  getRooms(){
    this.rooms=this.SocketService.roomListstatic;
    // this._roomsub2.unsubscribe();
    // this._roomsub2 = this.SocketService.roomList.subscribe(rooms => this.rooms = rooms);
  }

  ngOnDestroy() {
    this._roomsub.unsubscribe();
    this._roomsub2.unsubscribe();
    console.log("Deleted");
  }

  syncRooms() {
    this.rooms=this.SocketService.roomListstatic;
    this._roomsub2.unsubscribe();
    this._roomsub2 = this.SocketService.roomList.subscribe(rooms => this.rooms = rooms);
  }

  // showRooms() {
  //   this.isVisible=!this.isVisible;
  // }
}
