import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Song } from '../../models/Song';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/Profile';
import { User } from '@auth0/auth0-spa-js';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent implements OnInit {
  audioVolume: number = 0.05;
  Songs: Song[] = [];
  songUrl: string;
  song1: string = "song1";
  song2: string = "song2";
  song3: string = "song3";
  songIndex: number = 1;
  changeSongsCost: number = -10;
  skipSongCost: number = -25;
  currentSongTime: number = 0;
  totalSongTime: number = 123;
  currentPlayer: Profile = {
    currentScore: 0,
    email: "",
    playerScore: 0,
    playerName: "",
    gamesPlayed: 0,
    id: 0,
    customWords: []
  };
  constructor(private profApi: ProfileService, private musicApi: MusicService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getSongs();
    if (this.auth.isAuthenticated$) {
      this.auth.user$.subscribe(
        (response) => {
          this.currentPlayer.email = response?.email;
          console.log(this.currentPlayer.email);
          this.getUserInfo(this.currentPlayer.email!);
          this.getSongs();
        }
      );
    }
  }

  getSongs() {
    this.musicApi.getAllSongs().subscribe((response) => {
      this.Songs = response;
      //randomize list of songs with Durstenfeld shuffle
      this.randomizeSongs();
    }
    );
  }

  getUserInfo(p_email: string) {
    this.profApi.getUserInfo(p_email).subscribe(
      (response) => {
        this.currentPlayer.id = response.id;
        this.currentPlayer.playerName = response.playerName;
        this.currentPlayer.gamesPlayed = response.gamesPlayed;
        this.currentPlayer.currentScore = response.currentScore;
        this.currentPlayer.playerScore = response.playerScore;
        this.currentPlayer.customWords = response.customWords;
      });
  }

  updatePlayerProfile(profile: Profile) {
    this.profApi.updatePlayerProfile(profile).subscribe();
  }

  randomizeSongs() {

    for (let i = this.Songs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.Songs[i], this.Songs[j]] = [this.Songs[j], this.Songs[i]];
    }
    this.nextSong();
  }
  changeSongs() {
    if (this.currentPlayer.currentScore < Math.abs(this.changeSongsCost)) {
      return;
    }
    this.profApi.getUserInfo(this.currentPlayer.email!).subscribe(
      (response) => {
        this.currentPlayer.id = response.id;
        this.currentPlayer.playerName = response.playerName;
        this.currentPlayer.gamesPlayed = response.gamesPlayed;
        this.currentPlayer.currentScore = response.currentScore;
        this.currentPlayer.playerScore = response.playerScore;
        this.currentPlayer.customWords = response.customWords;
        this.currentPlayer.currentScore += this.changeSongsCost;
        this.updatePlayerProfile(this.currentPlayer);
        this.randomizeSongs();
      }
    );
  }

  skipSong() {
    if (this.currentPlayer.currentScore < Math.abs(this.skipSongCost)) {
      return;
    }
    this.profApi.getUserInfo(this.currentPlayer.email!).subscribe(
      (response) => {
        this.currentPlayer.id = response.id;
        this.currentPlayer.playerName = response.playerName;
        this.currentPlayer.gamesPlayed = response.gamesPlayed;
        this.currentPlayer.currentScore = response.currentScore;
        this.currentPlayer.playerScore = response.playerScore;
        this.currentPlayer.customWords = response.customWords;
        this.currentPlayer.currentScore += this.skipSongCost;
        this.updatePlayerProfile(this.currentPlayer);
        this.nextSong();
      });

  }
  nextSong() {
    //Shift the array is probably inefficient but its also easy
    let temp = this.Songs.shift()!
    this.Songs.push(temp);
    let audio = <HTMLAudioElement>document.getElementById('audio');

    this.song1 = this.Songs[0].songName;
    this.song2 = this.Songs[1].songName;
    this.song3 = this.Songs[2].songName;
    audio.src = this.Songs[0].songURL;
    audio.volume = this.audioVolume;
    audio.load();
    audio.play();
  }
  updateSongTime() {
    let audio = <HTMLAudioElement>document.getElementById('audio');
    this.currentSongTime = audio.currentTime;
    this.totalSongTime = audio.duration;
  }

  onVolumeChange(e: any) {
    this.audioVolume = e.target.value / 200;
    let audio = <HTMLAudioElement>document.getElementById('audio');
    audio.volume = this.audioVolume;
  }
}
