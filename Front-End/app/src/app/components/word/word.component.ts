import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Word } from 'src/app/models/Word';
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  word: Word;
  hiddenWord: string; 

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.word = { 
      name: '',
      category: ''
    }
    this.socket.fromEvent('getWord').subscribe((data: any) => {
      this.word.name = data.name;
      this.word.category = data.category;
      this.hiddenWord = this.hideWord(this.word.name);
    });
  }

  hideWord(word: string) {
    let temp = word;
    var re = /[a-zA-z]/gi;
    var newstr = temp.replace(re, "_");
    return newstr;
  }
}
