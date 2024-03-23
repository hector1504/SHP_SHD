import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';
  isFormValid: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService // Inyecta el servicio de autenticación
  ) {}

  validateForm() {
    this.isFormValid = this.email !== '' && this.password !== '';
  }

  login() {
    if (!this.isFormValid) return;

    // Utiliza el servicio de autenticación para iniciar sesión
    this.loginService.iniciarSesion(this.email, this.password);

    // Verifica si el usuario está autenticado después de intentar iniciar sesión
    if (this.loginService.logeado) {
      this.router.navigate(['/inicio']);
    } else {
      alert('El correo institucional o contraseña son incorrectos');
    }
  }
}
