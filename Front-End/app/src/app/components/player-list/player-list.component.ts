import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/models/Player';
import { PlayerListService } from 'src/app/services/player-list.service';
import { SocketIoService } from 'src/app/services/socketio.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
 export class PlayerListComponent implements OnInit {
 
  players: string[] = [];
  scores: number[] = [];
  playerlist:Player[]=[];
  

  displayedColumns = ['name', 'score'];
 



  // constructor(private playerService: PlayerListService) { }
  constructor(private socketService: SocketIoService) { }

  ngOnInit(): void {
    // this.playerService.getPlayers().subscribe((players) => (this.players = players));
    this.socketService.usersInRoom.subscribe(list => this.players=list);
    this.socketService.scores.subscribe(list=>this.scores=list);
    let count = 0;
    for (var i in this.players) {
      console.log(this.playerlist[count])
      this.playerlist[count]={
        name:this.players[count],
        score:0
      }
      count++;
    }
  }

}
