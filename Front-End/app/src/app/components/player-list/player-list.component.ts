import { Component, OnChanges, OnInit } from '@angular/core';

import { Player } from 'src/app/models/Player';
import { PlayerListService } from 'src/app/services/player-list.service';
import { SocketIoService } from 'src/app/services/socketio.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { stringify } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
 export class PlayerListComponent implements OnInit {
 
  playerlist:Player[];
  private _roomsub: Subscription;
  

  displayedColumns = ['gamename', 'score'];
 


  // constructor(private playerService: PlayerListService) { }
  constructor(private socketService: SocketIoService) { }

  ngOnInit(): void {
    // this.playerService.getPlayers().subscribe((players) => (this.players = players));
    this._roomsub=this.socketService.usersInRoom.subscribe(players => this.playerlist=players);
    // this.playerlist=[this.socketService.SetTest()];
  }

}
