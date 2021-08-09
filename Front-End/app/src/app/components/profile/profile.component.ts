import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentPlayer: Profile;
  constructor(private profApi: ProfileService) { }

  ngOnInit(): void {
    //get userid
    let userID: number = 1; //place holder so stuff works
  this.profApi.getUserInfo(userID).subscribe((response)=> {
    this.currentPlayer.playerName = response.playerName;
    this.currentPlayer.playerScore = response.playerScore;
    this.currentPlayer.email = response.email;
    this.currentPlayer.currentScore = response.currentScore;
    this.currentPlayer.gamesPlayed = response.gamesPlayed;
  });
  }

}
