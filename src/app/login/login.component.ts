import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService:AuthService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
  }

  ngOnInit(){}

  submit(){
    const email = this.loginForm.controls['email'].value
    const password = this.loginForm.controls['password'].value
    this.authService.login(email, password).subscribe()
  }


}
