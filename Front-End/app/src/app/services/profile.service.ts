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

  getUserInfo(userId: number) : Observable<Profile>
  {
    return this.http.get<Profile>(`${this.url}/${userId}`);
  }
}
