import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
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
  words: string[];

  category = this.socket.fromEvent<string>('room-category');
  
  chosenWord: Word;
  chosenCategory: string;

  constructor(public dialog: MatDialog, private socket: Socket, private wordService: ChooseWordService, private socketService:SocketIoService) { }

  ngOnInit() {
    this.chosenWord = {
      name: '',
      category: ''
    };
    this.words = [];
    this.category.subscribe(cat => this.chosenCategory = cat);
  }

  openDialog(): void {
    this.wordService.getWords(this.chosenCategory).subscribe(wordList => {
      for (let i = 0; i < wordList.length; i++) {
        this.words[i] = wordList[i].wordName;
      }
    });
    const dialogRef = this.dialog.open(ChooseWordDialogComponent, {
      data: this.words
    });
    dialogRef.afterClosed().subscribe(result => {
      this.chosenWord.name = result;
      this.socket.emit('setWord', {name: this.chosenWord.name, category: this.chosenCategory});
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


