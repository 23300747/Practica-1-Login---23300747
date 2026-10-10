import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  rol: string | null;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.rol = this.authService.obtenerRol();
  }
  //cierra sesin y redirige a login
  cerrarSesion() {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
