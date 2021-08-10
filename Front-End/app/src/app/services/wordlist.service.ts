import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordlistService {
  private url = "urltowebservice";
  constructor(private http: HttpClient) { }

  getWordsForPlayer(id: number) : Observable<string[]>
  { 
    let thisUrl = `${this.url}/${id}`;
    return this.http.get<string[]>(thisUrl);
  }

  addWordToPlayer(id: number, word: string) : Observable<string>
  {
    let thisUrl = `${this.url}/${id}`;
    return this.http.put<string>(thisUrl,word)
  }

  removeWordFromPlayer(id: number, word: string) : Observable<unknown>
  {
    let thisUrl = `${this.url}/${id}/${word}`;
    return this.http.delete(thisUrl);
  }

}
