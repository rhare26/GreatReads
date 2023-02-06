import { Component } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: any;
  constructor(private authService:AuthService, public dialog: MatDialog){
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });
  }
  submit() {
    const email = this.registerForm.controls['email'].value
    const username = this.registerForm.controls['username'].value
    const password = this.registerForm.controls['password'].value
    this.authService.register(email, username, password).subscribe()
  }
}
