import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  login(loginGroup : FormGroup)
  {
    if(!loginGroup.get("email")?.value)
    {
        alert('Please enter a valid email');
        return;
    }
    if(!loginGroup.get("email")?.value)
    {
      alert('Please enter a valid password');
      return
    }
    //Need call to service to check login
  }
}
