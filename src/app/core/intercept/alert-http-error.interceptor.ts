import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private messageService = inject(MessageService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro no lado do cliente
          errorMessage = `Erro: ${error.error.message}`;
        } else {
          // Erro no lado do servidor
          errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
        }
        if (error.status === 401) {
            this.messageService.add({ severity: 'warn', summary: 'Sucesso', detail: 'Sessão expirou, faça login novamente.' });
          }
          if (error.status === 500) {
            this.messageService.add({ severity: 'error', summary: 'Sucesso', detail: 'Tente novamente, caso o erro persista entre em contato como administrador do sistema!' });
          }
          if (error.status === 400) {
            let errorMessage = '';

            if (typeof error.error === 'string') {
              errorMessage = error.error;
            } else if (Array.isArray(error.error)) {
              errorMessage = error.error
              .map(el => el?.ErrorMessage)
              .join(', ');
            } else if (typeof error.error === 'object' && error.error !== null) {
              errorMessage = JSON.stringify(error.error);
            } else {
              errorMessage = `Código do erro:${error.status} Ocorreu um erro desconhecido`;
            }
            this.messageService.add({ severity: 'error', summary: 'Sucesso', detail:errorMessage ?? `Código do erro:${error.status} Ocorreu um erro desconhecido` });
          }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
