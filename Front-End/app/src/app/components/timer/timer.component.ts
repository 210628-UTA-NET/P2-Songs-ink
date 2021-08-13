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
  timeLine:string;
  currentTime=0;
  timerId:any;
  numberInRoom:number;
  readyToStart=true;

  private _timesub: Subscription;

  constructor(private socketService:SocketIoService) { }

  ngOnInit(): void {
    this._timesub = this.socketService.timeRemaining.subscribe(time=>this.timeLine=time)
    if (this.timeLine!="") {
      this.readyToStart=false;
    }
    this._timesub = this.socketService.usersInRoom.subscribe(numb => this.numberInRoom=numb.length);
  }



  StartRound(){
    this.readyToStart = false;
    this.currentTime = 35;
    this.timerId = setInterval(() =>{
      if(this.currentTime==0){
        this.timeLine = "";
        this.socketService.TimeUp();
        this.readyToStart = true;
        clearTimeout(this.timerId);
      }else{
      this.socketService.UpdateTimer(this.currentTime);
      this.currentTime--;
      }
    }, 1000)
  }

}
