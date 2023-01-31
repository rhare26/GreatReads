import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      passsword: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
  }

  ngOnInit(){}

  submit(){}
}
