import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // Need to use actual web service address once its posted
  private url = "urltowebservice";

  constructor(private http: HttpClient) { }

  addAccount(acc: Register) : Observable<Register>
  { //This should send a request to the back end to create a new player account
    return this.http.post<Register>(this.url, acc)
  }
}
