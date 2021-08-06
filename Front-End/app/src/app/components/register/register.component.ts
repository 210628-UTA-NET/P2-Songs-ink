import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }
  registerAccount(registerGroup : FormGroup)
  {
    if(!registerGroup.get("email")?.value)
    {
      alert('Please enter a valid email');
      return;
    }
    if(!registerGroup.get("username")?.value)
    {
      alert('Please enter a valid username');
    }
    if(!registerGroup.get("password")?.value)
    {
      alert('Please enter a valid password');
    }
    //Need call to service to create new user
  }

}
