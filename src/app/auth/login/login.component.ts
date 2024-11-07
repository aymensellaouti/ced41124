import { Component, inject } from '@angular/core';
import { Credentials } from '../dto/credentials.dto';
import { AuthService } from '../service/auth.service';
import { APP_ROUTES } from '../../config/app-routes.config';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);
  login(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next:(response) => {
        this.authService.saveToken(response.id);
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      }
    })
  }

}
