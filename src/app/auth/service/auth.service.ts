import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { BehaviorSubject, catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONSTANTES } from '../../config/app-constantes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // user$: Flux chaud qui représente le user connecté : user null user null user null user null
  users$ = new BehaviorSubject<ConnectedUser | null>(null);
  // isLoggedIn$: Observable : true flase true false
  isLoggedIn$: Observable<boolean> = this.users$.pipe(map((user) => !!user));
  // isLoggedOut$ Observable : false true false true
  isLoggedOut$: Observable<boolean> = this.users$.pipe(map((user) => !user));

  http = inject(HttpClient);

  constructor() {
    const user = localStorage.getItem(APP_CONSTANTES.connectedUser);
    if (user) {
      this.users$.next(JSON.parse(user));
    }
  }

  login(credentials: Credentials): Observable<Boolean> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap((response) => {
        const user = new ConnectedUser(response.userId, credentials.email);
        localStorage.setItem(APP_CONSTANTES.connectedUser, JSON.stringify(user));
        this.users$.next(user);
        this.saveToken(response.id);
      }),
      map(() => true),
      catchError((e) => {
        // todo en cas d'erreur
        return of(false);
      })
    );
  }
  logout(): void {
    localStorage.removeItem(APP_CONSTANTES.connectedUser);
    this.removeToken();
    this.users$.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  saveToken(token: string) {
    localStorage.setItem(APP_CONSTANTES.token, token);
  }

  getToken(): string {
    return localStorage.getItem(APP_CONSTANTES.token) ?? '';
  }

  removeToken() {
    localStorage.removeItem(APP_CONSTANTES.token);
  }
}

export class ConnectedUser {
  constructor(public id: number, public email: string) {}
}
