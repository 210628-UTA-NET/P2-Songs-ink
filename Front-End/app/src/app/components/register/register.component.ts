import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RegisterService} from '../../services/register.service';
import {Register} from '../../models/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerGroup = new FormGroup({
    email!: new FormControl(),
    username!: new FormControl(),
    password!: new FormControl()
  });

  constructor(private regApi: RegisterService) { }

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
    let newAcc: Register = {
      email: registerGroup.get("email")?.value,
      username: registerGroup.get("username")?.value,
      password: registerGroup.get("password")?.value
    };

    this.regApi.addAccount(newAcc).subscribe();
   
  }
}
