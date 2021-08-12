import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Socket } from 'ngx-socket-io';
import { Word } from 'src/app/models/Word';
import { ChooseWordService } from 'src/app/services/choose-word.service';

@Component({
  selector: 'app-choose-word',
  templateUrl: './choose-word.component.html',
  styleUrls: ['./choose-word.component.css']
})
export class ChooseWordComponent implements OnInit {

  @Input()
  words: Word[] = [];
  
  chosenWord: Word;

  constructor(public dialog: MatDialog, private socket: Socket, private wordService: ChooseWordService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe(words => (this.words = words));
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(ChooseWordDialogComponent, {
      data: this.words
    });
    dialogRef.afterClosed().subscribe(result => {
      this.chosenWord.name = result.name;
      this.chosenWord.category = result.category;
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
    @Inject(MAT_DIALOG_DATA) public data: Word[]) { console.log(data);}

    onNoClick(): void {
      this.dialogRef.close();
    }
}


