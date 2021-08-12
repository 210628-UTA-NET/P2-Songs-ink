import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  word: string;
  hiddenWord: string; 

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.socket.fromEvent('getWord').subscribe((data: any) => {
      this.word = data;
      this.hiddenWord = this.hideWord(this.word);
    });
  }

  // replaces letters with _s 
  hideWord(word: string) {
    let temp = word;
    var re = /[a-zA-z]/gi;
    var newstr = temp.replace(re, "_");
    console.log(newstr);
    return newstr;
  }
}
