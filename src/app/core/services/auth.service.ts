import { Injectable, resolveForwardRef } from '@angular/core';
import { Role, User } from '../../layouts/dashboard/pages/users/models';
import { Router } from '@angular/router';
import { delay, finalize, map, mergeMap, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUser:User | null = null;
  constructor(private router: Router) { }

  login(): void {
    this.authUser = {
      id: 3,
      email: 'user@user.com',
      password:'asdasd',
      firstName: 'Nombre',
      lastName: 'Apellido',
      role: Role.ADMIN
    };

    localStorage.setItem('token',"usertoken");

    this.router.navigate(['dashboard', 'home'])
  }

  logout():void {
    this.authUser = null;
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login'])
  }

  verifyToken() {
    return of(localStorage.getItem('token')).pipe(delay(1000), map((response) => {
      if (response) {
        this.loadUser()
      } 
      return !!response
      
    }
    ));
  }

  loadUser(){
    this.authUser = {
      id: 3,
      email: 'user@user.com',
      password:'asdasd',
      firstName: 'Nombre',
      lastName: 'Apellido',
      role: Role.ADMIN
    };
  }
}
