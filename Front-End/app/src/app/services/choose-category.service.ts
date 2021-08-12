import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChooseCategoryService {

  private apiURL = 'http://localhost:3004/categories';

  constructor(private http: HttpClient) { }

  getDefaultCategories() {
    return this.http.get<string[]>(this.apiURL);
  }

  getUserAndDefaultCategories(userID: number) {
    return this.http.get<string[]>(`this.apiURL/${userID}`)
  }
}
