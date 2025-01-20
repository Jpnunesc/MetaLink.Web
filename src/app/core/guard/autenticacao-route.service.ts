import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private messageService: MessageService
  ) {}

  canActivate(): boolean {
    return this.validacaoGuardToken();
  }

  canActivateChild(): boolean {
    return this.validacaoGuardToken();
  }

  validacaoGuardToken() {
    const tokenExpired = this.tokenService.tokenExpired();

    const usuario = this.tokenService.decryptToken();
    if (tokenExpired || !usuario) {
      this.router.navigate(['/login']);
    }

    return !tokenExpired;
  }
}
