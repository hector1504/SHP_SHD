import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  stats() {
    this.router.navigate(['/estadisticas']);
  }
  
  catalogo() {
    this.router.navigate(['/catalogo']);
  }

  logout() {
    // Llama a la función cerrarSesion() del servicio de autenticación
    this.loginService.cerrarSesion();
    // Redirige a la página de inicio
    this.router.navigate(['/home']);
  }
}
