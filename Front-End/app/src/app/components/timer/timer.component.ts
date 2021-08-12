import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketIoService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timeRemaining = 0;
  private _timesub: Subscription;

  constructor(private socketService:SocketIoService) { }

  ngOnInit(): void {
    this._timesub = this.socketService.timeRemaining.subscribe(time=>this.timeRemaining=time)
  }

  StartTimer(){
    this.socketService.StartTimer();
  }

}
