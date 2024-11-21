import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { APP_ROUTES } from '../../config/app-routes.config';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    standalone: true,
    imports: [
    RouterLinkActive,
    RouterLink,
    AsyncPipe
],
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
