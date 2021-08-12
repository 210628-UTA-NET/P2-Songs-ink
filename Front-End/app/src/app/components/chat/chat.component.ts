import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SocketIoService } from 'src/app/services/socketio.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import {Room} from 'src/app/models/room';
import {Chatline} from 'src/app/models/chatline';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() newChatParameter: string;
  room: string;
  backup:string[] = [];
  chatlines:string[] = [];
  newChat:string;
  goal:string;
  currentUsername:string;
  playerTest:string[];
  private _roomsub: Subscription;
  firstCorrect:boolean;
  

  title = 'socketio-angular';
  
  constructor(private socketService: SocketIoService) {}
  
  ngOnInit() {
    this._roomsub = this.socketService.currentRoom.subscribe(currentRoom => this.room = currentRoom);
    this._roomsub = this.socketService.goalWord.subscribe(theWord => this.goal=theWord);
    // this._roomsub = this.socketService.currentRoom.pipe(
    //   startWith({ id: '',})
    // ).subscribe(room => this.room = room);
    
    // this._roomsub = this.socketService.chatLogOfRoom.subscribe(recursive => this.chatlines = recursive.reverse());
    // this._roomsub = this.socketService.getNewMessage().subscribe((message:string)=> {
    //     this.chatlines.unshift(message);
    //   })

      this._roomsub = this.socketService.newMessage.subscribe((message:string)=> {
        this.chatlines.unshift(message);
      })

  }

  AddChat(message:string) {
    if(message&&this.goal){
      if(message.toLowerCase==this.goal.toLowerCase){
      this.socketService.editChat(this.currentUsername+" guessed correctly!");
      if(this.firstCorrect){
        this.socketService.AddPoints(100);
        this.firstCorrect=false;
      } else{
        this.socketService.AddPoints(50);
      }
      
    }
    }else if(message){
      console.log("inside else");
    this.socketService.editChat(message);
  }
}



  // updateChat(){
  //   this.backup.forEach(element => {
  //     this.chatlines.unshift(element);
  //   });
  // }


  ngOnDestroy(){
    this.socketService.leaveRoom();
    this._roomsub.unsubscribe();
  }
}
