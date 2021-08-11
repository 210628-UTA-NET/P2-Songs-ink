import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  login()
  {
    this.auth.loginWithRedirect();
  }
  logout()
  {
    this.auth.logout();
  }
}
