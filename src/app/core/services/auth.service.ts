import { Injectable } from '@angular/core';
import { Role, User } from '../../layouts/dashboard/pages/users/models';
import { Router } from '@angular/router';
import { delay, map, of } from 'rxjs';

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

    this.router.navigate(['dashboard'])
  }

  logout():void {
    this.authUser = null;
    this.router.navigate(['auth', 'login'])
  }

  verifyToken() {
    return of(localStorage.getItem('token')).pipe(delay(1000), map((response) => !!response ));
  }
}
