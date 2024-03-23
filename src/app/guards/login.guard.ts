import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private sesion: LoginService, private router: Router) {}

  canActivate() {
    if (this.sesion.logeado) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
