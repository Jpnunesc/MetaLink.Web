import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Perfil } from '../interface/authenticate-user-0utput';

const KEY = 'authToken';


@Injectable({
  providedIn: 'root',
})
export class TokenService {
  jwtHelper = new JwtHelperService();
  constructor() { }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string) {
    this.removeToken();
    window.localStorage.setItem(KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(KEY) ?? "";
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }

  decryptToken(): any {
    var user = this.jwtHelper.decodeToken(this.getToken());
    this.montarPerfil(user);
    return user as any
  }

  private montarPerfil(user: any) {
    if (user && user.perfil) {
      let perfil: Perfil = {
        nome: user.perfil,
        funcionalidades: []
      };

      Object.entries(user).forEach(([key, value]) => {
        if (typeof value == 'object' && Array.isArray(value)) {
          perfil?.funcionalidades?.push({
            nome: key,
            acoes: value as string[]
          });

          perfil?.funcionalidades?.push({
            nome: key,
            acoes: value as string[]
          });
        }
      });

      user.perfil = perfil;
    }
  }

  tokenExpired() {
    const expired = this.jwtHelper.isTokenExpired(this.getToken())
    return expired;
  }
}
