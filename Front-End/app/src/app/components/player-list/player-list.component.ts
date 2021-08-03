import { Component, OnInit } from '@angular/core';

import { PlayerListItemComponent } from '../player-list-item/player-list-item.component';
import { PlayerListService } from 'src/app/services/player-list.service';

import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerListService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((players) => (this.players = players));
  }

}
