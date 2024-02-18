import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

interface LoginCredentials {
  email: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginCredentials: LoginCredentials = {email:'',password:''}
  loginFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private authService:AuthService){
    this.loginFormGroup = this.formBuilder.group({
      email: this.formBuilder.control(this.loginCredentials.email, [Validators.required, Validators.email]),
      password: this.formBuilder.control(this.loginCredentials.password, [Validators.required, Validators.minLength(6)])
    })
  }


  onSubmit():void {
    if (this.loginFormGroup.invalid){
      this.loginFormGroup.markAllAsTouched()
      return
    } else {
      this.authService.login()
    }
  }
}
