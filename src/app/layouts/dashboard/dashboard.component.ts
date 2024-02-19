import {  Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Role } from './pages/users/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  {
  showFiller = false;
  
  constructor(private authService: AuthService){}
  
  logoutUser(){
    this.authService.logout()
  }
  isAdmin(): boolean {
    if (this.authService.authUser?.role === Role.ADMIN) {
      return true;
    } else {
      return false;
    }
  }
}

