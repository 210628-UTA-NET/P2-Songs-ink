import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  login()
  {
    this.auth.loginWithRedirect(
      {
        /*
        So I realized that if someone creates an account but doesn't go to the profile
        before joining the game it wont create anything in the backend so this fixes that problem by forcing the 
        person to go to the profile page after logging in.
        */
        appState: {target: '/profile'}
      }
    );
  }
  logout()
  {
    this.auth.logout();
  }
}
