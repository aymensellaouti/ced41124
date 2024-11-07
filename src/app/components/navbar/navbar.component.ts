import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { APP_ROUTES } from '../../config/app-routes.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
