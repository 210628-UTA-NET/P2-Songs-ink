import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Song } from '../models/Song';

const httpOptions = 
{
 headers: new HttpHeaders({
   'Content-Type': 'application/json',
 }),
};

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private url = "https://songsinkbackend.azurewebsites.net/api/Main/";
  constructor(private http: HttpClient) { }
  getAllSongs() : Observable<Song[]>
  {
    return this.http.get<Song[]>(this.url+"getAllSongs");
  }

}
