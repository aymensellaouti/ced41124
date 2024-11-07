import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { APP_CONSTANTES } from '../../config/app-constantes.config';

export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  router = inject(Router);
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.authService.isAuthenticated()) {
        /* const headers = new HttpHeaders().set(
        ); */
        const cloneReq = req.clone({
          setHeaders: {
            [APP_CONSTANTES.authHeadersName]: this.authService.getToken(),
          },
        });
        return next.handle(cloneReq).pipe(
          tap((response) => console.log({response}))
        );
    }
    return next.handle(req);
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
