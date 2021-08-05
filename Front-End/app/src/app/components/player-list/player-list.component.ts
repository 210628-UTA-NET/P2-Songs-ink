import { Component, OnInit } from '@angular/core';

import { Player } from 'src/app/models/Player';
import { PlayerListService } from 'src/app/services/player-list.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
 export class PlayerListComponent implements OnInit {
 
  players: Player[] = [];
  

  displayedColumns = ['name', 'score'];
 



  constructor(private playerService: PlayerListService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) => (this.players = players));
  }

}
