import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserLoginInput } from '../interface/user-login-input';
import { environment } from '../../../environments/environment';
import { AuthenticateUserOutput } from '../interface/authenticate-user-0utput';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenService } from './token.service';
import { emitirMensagem } from '../../shared/util/emitirMensagem';
import { ResultOutput } from '../interface/result-output';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private messageService: MessageService) { }

  login(user: UserLoginInput) {
    return this.http.post<ResultOutput<AuthenticateUserOutput>>(`${environment.meta_api}/user/authenticate`, user).subscribe({
      next: (resp: any) => {
        if (resp.success) {
          emitirMensagem(this.messageService, 'success', `${resp.message}`);
          this.tokenService.setToken(resp.data.token);
          localStorage.setItem('user', JSON.stringify(resp.data));
          this.decodedToken = this.jwtHelper.decodeToken(resp.data.token);
          sessionStorage.setItem('username', this.decodedToken.unique_name);
          this.router.navigate(['../']);
        }
        else {
          emitirMensagem(this.messageService, 'error', `${resp.message}`);
        }
      },
      error: (erro) => {
        emitirMensagem(this.messageService, 'error', `${erro}!`);
      }
    });
  }


  obterNovoTokenPorCpf(cpf: string, login: string): Observable<any> {
    return this.http.get<any>(`${environment.meta_api}/login/obter-novo-token/${cpf}/${login}`).pipe(take(1));
  }

}
