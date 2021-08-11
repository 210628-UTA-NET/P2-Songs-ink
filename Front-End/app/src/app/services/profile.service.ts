import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = "urltowebservice";
  constructor(private http: HttpClient) { }

  getUserInfo(userEmail: string) : Observable<Profile>
  {
    return this.http.get<Profile>(`${this.url}/${userEmail}`);
  }
  addPlayerProfile(newPlayerProfile: Profile) : Observable<Profile>
  {
    return this.http.post<Profile>(this.url,newPlayerProfile);
  }
  updatePlayerProfile(playerProfile: Profile): Observable<Profile>
  {
    return this.http.put<Profile>(this.url,playerProfile);
  }
}
