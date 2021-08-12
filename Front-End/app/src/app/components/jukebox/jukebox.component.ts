import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { Song } from '../../models/Song';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-jukebox',
  templateUrl: './jukebox.component.html',
  styleUrls: ['./jukebox.component.css']
})
export class JukeboxComponent implements OnInit,AfterViewInit {

  Songs: Song[] = [];
  songUrl: string;
  song1: string ="song1";
  song2: string;
  song3: string;
  songIndex: number =1;
  changeSongsCost: number = -10;
  nextSongCost: number = -25;
  currentSongTime: number =0;
  totalSongTime: number = 123;
  constructor(private musicApi: MusicService, public auth: AuthService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs()
  {
    this.musicApi.getAllSongs().subscribe((response) => {
      this.Songs = response;
      //randomize list of songs with Durstenfeld shuffle
      this.randomizeSongs();
      
      console.log(this.Songs);
      
    }
    );
  }

  ngAfterViewInit(): void {
    //this.nextSong();
  }
  randomizeSongs()
  {
    for (let i = this.Songs.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.Songs[i], this.Songs[j]] = [this.Songs[j], this.Songs[i]];
    }
    this.nextSong();
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
    audio.volume = 0.02;
    audio.load();
    audio.play();
  }
  updateSongTime()
  {
    let audio = <HTMLAudioElement>document.getElementById('audio');
    this.currentSongTime= audio.currentTime;
    this.totalSongTime =audio.duration;
  }


}
