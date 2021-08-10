import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../models/Profile';
import { ProfileService } from '../../services/profile.service';
import { PointsService } from '../..//services/points.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userID: number = parseInt(sessionStorage.getItem('id')!); //get userID from session variable
  currentPlayer: Profile;
  constructor(private profApi: ProfileService, private pointsApi: PointsService) { }

  ngOnInit(): void {

    this.profApi.getUserInfo(this.userID).subscribe((response) => {
      this.currentPlayer.playerName = response.playerName;
      this.currentPlayer.playerScore = response.playerScore;
      this.currentPlayer.email = response.email;
      this.currentPlayer.currentScore = response.currentScore;
      this.currentPlayer.gamesPlayed = response.gamesPlayed;
    });
  }
  currentScore()
  {
    this.pointsApi.getScoreofPlayer(this.userID).subscribe(
      (response) => {
        this.currentPlayer.currentScore = response;
      });
  }
  changeScore(points: number)
  {
    this.pointsApi.updateScoreOfPlayer(this.userID,points).subscribe(
      (response) => {
        this.currentScore();
      });
  }
}
