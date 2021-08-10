import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private url = "urltowebservice";
  constructor(private http: HttpClient) { }
  getScoreofPlayer(id: number) : Observable<number> //gets current score not total score
  {
    let thisUrl = `${this.url}/${id}`;
    return this.http.get<number>(thisUrl);
  }
  updateScoreOfPlayer(id: number, score:number): Observable<number>
  {
    let thisUrl = `${this.url}/${id}`;
    return this.http.put<number>(thisUrl,score);
  }
}
