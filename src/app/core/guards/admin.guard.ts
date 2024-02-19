import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../../layouts/dashboard/pages/users/models';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (authService.authUser?.role === Role.ADMIN) {
    return true
  } else {
    return false
  }

};
