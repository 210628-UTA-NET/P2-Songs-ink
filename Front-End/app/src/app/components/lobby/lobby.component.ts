import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocketIoService } from 'src/app/services/socketio.service';
import { RoomListComponent } from '../room-list/room-list.component';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
