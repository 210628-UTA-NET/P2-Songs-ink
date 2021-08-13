import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChooseCategoryService {

  //private apiURL = 'http://localhost:3004/categories';
  private url = "https://songsinkbackend.azurewebsites.net/api/Main/";

  constructor(private http: HttpClient) { }

  getDefaultCategories() {
    return this.http.get<any>(`${this.url}/getAllCategories`);
  }

  getUserAndDefaultCategories(userID: number) {
    return this.http.get<string[]>(this.url);
  }
}
