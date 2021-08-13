import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from '../models/Word';
@Injectable({
  providedIn: 'root'
})
export class ChooseWordService {

  private url = "https://songsinkbackend.azurewebsites.net/api/Main/get4RandomWordsOfACategoryWithCategoryName";

  constructor(private http: HttpClient) { }

  getWords(category: string) {
    return this.http.get<any>(`${this.url}/${category}`);
  }
}
