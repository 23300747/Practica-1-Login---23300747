import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/AuthService';

export const authGuard: CanActivateFn = (route, state) => {
  //obtenemos el servicio de autenticación
  const authService = inject(AuthService);
  //obtenemos el servicio de navegación
  const router = inject(Router);
  //verificamos si el usuario tiene una sesion
  if (authService.estaAutenticado()) {
    return true; //pertimos el acceso
  }
  //si no esta autenticado, redirigimos al login
  return router.createUrlTree(['/login']);
};