import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {

  cv: Cv | null = null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.findCvById(id);
    if (!this.cv) this.router.navigate([APP_ROUTES.cv]);
  }

  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
