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
    let logResponse: Player;

    //if you need more user data then the player model and the login service should be changed
    this.loginApi.getAccount(newLogin).subscribe(
      (response) => {
        logResponse.id = response.id;
        logResponse.name = response.name;
        logResponse.score = response.score;
      }
    )
    //should probably do some form of validation in case the login valid
    //now do something with socket.io i imagine
  }
}
