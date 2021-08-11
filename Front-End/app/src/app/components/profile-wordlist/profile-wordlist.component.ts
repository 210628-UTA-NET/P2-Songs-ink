import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-wordlist',
  templateUrl: './profile-wordlist.component.html',
  styleUrls: ['./profile-wordlist.component.css']
})
export class ProfileWordlistComponent implements OnInit {
  @Output() onRemoveWord: EventEmitter<string> = new EventEmitter();
  @Input() word: string;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {

  }

  removeWord(word: string)
  {
    this.onRemoveWord.emit(word);
  }


}
