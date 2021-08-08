import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = "urltowebservice";

  constructor(private http: HttpClient) { }

  getAccount(login: Login) : Observable<Player>
  { //This should send a request to login the player and 
    //return their info
    return this.http.post<Player>(this.url, login);
  }
}
