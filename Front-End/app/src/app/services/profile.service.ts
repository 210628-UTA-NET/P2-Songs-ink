import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

const httpOptions = 
{
 headers: new HttpHeaders({
   'Content-Type': 'application/json',
 }),
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url = "https://songsinkbackend.azurewebsites.net/api/Main/";
  //private url = "http://localhost:3000/profiles/";
  constructor(private http: HttpClient) { }

  getUserInfo(userEmail: string) : Observable<Profile>
  {
    return this.http.get<Profile>(`${this.url}getAPlayer/${userEmail}`);
    //return this.http.get<Profile>(`${this.url}1`);
  }
  addPlayerProfile(newPlayerProfile: Profile) : Observable<Profile>
  {
    return this.http.post<Profile>(this.url+"createNewPlayer",newPlayerProfile, httpOptions);//update url when have endpoint
  }
  updatePlayerProfile(playerProfile: Profile): Observable<Profile>
  {
    return this.http.put<Profile>(this.url+"updatePlayer",playerProfile, httpOptions);
    //return this.http.put<Profile>(this.url+"1",playerProfile);
  }
}
