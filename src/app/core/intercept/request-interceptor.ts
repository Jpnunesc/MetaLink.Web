import { inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { TokenService } from '../service/token.service';
import { LoadingService } from '../service/loading.service';
import { MessageService } from 'primeng/api';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  private tokenService = inject(TokenService);
  private loadingService = inject(LoadingService);
  private messageService = inject(MessageService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.hasToken()) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.tokenService.getToken()}` }
      });
    }
    this.loadingService.start();

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if ((request.method === 'POST' || request.method === 'PUT' || request.method === 'PATCH') && event.status === 200) {
            this.loadingService.stop();
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Operação realizada com sucesso!' });
          }
        }
      }),
      finalize(() => {
        this.loadingService.stop();
      })
    );

  }
}
