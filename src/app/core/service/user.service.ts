import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { TokenService } from './token.service';
import { UserType, UserToken } from '../interface/user-output';

const KEY = 'usuario';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usuario!: UserToken;

  public usuarioSubject = new BehaviorSubject<UserToken>({} as UserToken);
  constructor(private router: Router, private tokenService: TokenService) {
  this.getUsuario().subscribe(user => {
    this.usuario = user;
  });
  }

  getUsuario(): Observable<UserToken> {
    const usuario = this.tokenService.decryptToken();
    this.usuarioSubject.next(usuario);
    this.usuario = usuario;
    return this.usuarioSubject.asObservable();
  }

  sair() {
    this.usuarioSubject.next({} as UserToken);
    this.tokenService.removeToken();
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  verificarPermissaoAcao(nomefuncionalidade: string, acao: string): boolean {
    var funcionalidade = this.usuario.userType == UserType.Manage;
    return funcionalidade ? true : false;
  }

  verificarPermissaoFuncionalidade(nomefuncionalidade: string): boolean {
    var funcionalidade = this.usuario.userType ==  UserType.Manage || this.usuario.userType ==  UserType.Client;
    return funcionalidade ? true : false;
  }

  removeAcento(text: string): string {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
  }
}
