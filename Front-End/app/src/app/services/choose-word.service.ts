import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../models/Word';
@Injectable({
  providedIn: 'root'
})
export class ChooseWordService {

  private apiURL = ""
  //'http://localhost:3000/words'

  constructor(private http: HttpClient) { }

  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(this.apiURL);
  }


}
