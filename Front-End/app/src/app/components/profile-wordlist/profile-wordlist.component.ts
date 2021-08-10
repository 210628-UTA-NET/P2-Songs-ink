import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { WordlistService } from '../../services/wordlist.service';

@Component({
  selector: 'app-profile-wordlist',
  templateUrl: './profile-wordlist.component.html',
  styleUrls: ['./profile-wordlist.component.css']
})
export class ProfileWordlistComponent implements OnInit {
  @Output() onAddWord: EventEmitter<number> = new EventEmitter;
  playerWords: string[] = [];
  faTimes = faTimes;
  wordAddCost:number = 100;
  newWord: string;
  playerId: number = parseInt(sessionStorage.getItem('id')!);


  constructor(private wordListApi: WordlistService) { }

  ngOnInit(): void {
    this.getAllWords();
  }
  getAllWords() // this makes a call to the api and gets all the words associated with a player
  {
    this.wordListApi.getWordsForPlayer(this.playerId).subscribe(
      (response) => {
        this.playerWords = response;
      }
    );
  }
  addWord(word: string)
  {
    if(!word)
    {
      alert('Please enter a word');
      return;
    }
    this.wordListApi.addWordToPlayer(this.playerId,word).subscribe(
    (response) => {
      this.getAllWords();
    });
    this.onAddWord.emit(this.wordAddCost);
    //emit an event that is detected by the profile to update the player score
  }
  removeWord(word: string)
  {
    this.wordListApi.removeWordFromPlayer(this.playerId, word).subscribe();
    this.getAllWords();
  }


}
