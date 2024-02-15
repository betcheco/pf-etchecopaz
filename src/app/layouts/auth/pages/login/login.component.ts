import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router:Router){
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
      console.log("User logged")
      this.router.navigate(['/dashboard/home'])
    }
  }
}
