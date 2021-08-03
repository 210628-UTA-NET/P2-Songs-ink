import { Component, OnInit } from '@angular/core';
import { CanvasComponent } from '../canvas/canvas.component'
import { PlayerListComponent } from '../player-list/player-list.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
