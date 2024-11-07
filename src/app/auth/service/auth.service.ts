import { inject, Injectable } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONSTANTES } from '../../config/app-constantes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(APP_API.login, credentials);
  }
  logout(): void {
    return this.removeToken();
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
