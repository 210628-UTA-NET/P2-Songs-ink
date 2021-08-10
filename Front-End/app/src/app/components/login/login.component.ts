import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from '../../models/Login';
import { LoginService } from '../../services/login.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  logResponse: Player;

  constructor(private loginApi: LoginService) { }

  ngOnInit(): void {
  }

  login(loginGroup: FormGroup) {
    if (!loginGroup.get("email")?.value) {
      alert('Please enter a valid email');
      return;
    }
    if (!loginGroup.get("email")?.value) {
      alert('Please enter a valid password');
      return
    }
    let newLogin: Login = {
      email: loginGroup.get("email")?.value,
      password: loginGroup.get("password")?.value
    };
    

    //if you need more user data then the player model and the login service should be changed
    this.loginApi.getAccount(newLogin).subscribe(
      (response) => {
        this.logResponse.id = response.id;
        this.logResponse.name = response.name;
        this.logResponse.score = response.score;
      }
    )

    //should probably do some form of validation in case the login valid

    //Store user id and username to session storage for use across the application
    sessionStorage.setItem('id',this.logResponse.id!.toString());
    sessionStorage.setItem('username', this.logResponse.name);
    //now do something with socket.io i imagine
  }
}
