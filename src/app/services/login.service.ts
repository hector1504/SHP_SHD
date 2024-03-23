import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logeado: boolean = false;

  constructor() { }

  iniciarSesion(usuario: string, contrasenia: string) {
    if (usuario === '20223l001067@utcv.edu.mx' && contrasenia === 'admin1901') {
      this.logeado = true;
    } else {
      this.logeado = false;
    }
  }

  cerrarSesion() {
    this.logeado = false;
  }
}
