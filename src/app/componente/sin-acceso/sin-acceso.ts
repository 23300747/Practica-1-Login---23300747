import { Component } from '@angular/core';
// Routerlink para poder redirigir a la pagina de login
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-sin-acceso',
  styleUrl: './sin-acceso.css',
  templateUrl: './sin-acceso.html',
})
export class SinAcceso {}
