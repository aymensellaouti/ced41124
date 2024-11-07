import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { AuthService } from "../../auth/service/auth.service";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  // Rahou mech ana SANA heya eli 9alet :D
  // authService = inject(AuthService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => (this.cv = cv),
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
    });
  }

  delete() {
    if (this.cv) {
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cv]),
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
