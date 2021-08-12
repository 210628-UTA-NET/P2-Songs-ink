import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { Word } from 'src/app/models/Word';
import { ChooseWordService } from 'src/app/services/choose-word.service';
import { SocketIoService } from 'src/app/services/socketio.service';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.css']
})
export class ChooseWordComponent implements OnInit {

  @Input()
  words: Word[] = [];

  @Input()
  category: string;
  
  chosenWord: Word;

  constructor(public dialog: MatDialog, private socket: Socket, private wordService: ChooseWordService, private socketService:SocketIoService) { }

  ngOnInit() {
    this.chosenWord = {
      name: '',
      category: ''
    };
    this.category = 'placeholder';
    // retrieve category from user and pass to getWords()
    this.wordService.getWords().subscribe(words => (this.words = words));
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(ChooseWordDialogComponent, {
      data: {words: this.words, category: this.category }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.chosenWord.name = result;
      this.socket.emit('setWord', {name: this.chosenWord.name, category: this.category});
      this.socketService.StartRound();
    });
  }

}

@Component({
  selector: 'app-choose-word-dialog',
  templateUrl: './choose-word-dialog.component.html',
})
export class ChooseWordDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ChooseWordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}


