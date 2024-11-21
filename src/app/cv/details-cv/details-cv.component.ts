import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { AuthService } from "../../auth/service/auth.service";
import { catchError, EMPTY, Observable, switchMap, tap } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { DefaultImagePipe } from "../pipes/default-image.pipe";


@Component({
    selector: 'app-details-cv',
    templateUrl: './details-cv.component.html',
    styleUrls: ['./details-cv.component.css'],
    standalone: true,
    imports: [
    AsyncPipe,
    DefaultImagePipe
],
})
export class DetailsCvComponent {
  // cv: Cv | null = null;
  cvService = inject(CvService);
  acr = inject(ActivatedRoute);
  // Le flux qui contient le cv associé à l'id dans l'url
  cv$: Observable<Cv> = this.acr.params.pipe(
    switchMap(params => this.cvService.getCvById(params['id'])),
    catchError(e => {
      this.router.navigate([APP_ROUTES.cv]);
      return EMPTY;
    })
  );
  // Rahou mech ana SANA heya eli 9alet :D
  // authService = inject(AuthService);
  router = inject(Router);
  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // this.cvService.getCvById(id).subscribe({
    //   next: (cv) => (this.cv = cv),
      // error: (e) => {
      //   this.router.navigate([APP_ROUTES.cv]);
      // },
    // });
  }

  delete(cv: Cv) {
      // this.cvService.deleteCvById(cv.id).pipe(
      //   tap(() => this.router.navigate([APP_ROUTES.cv])),
      //   catchError((e) => {
      //     console.log(e);
      //     return EMPTY;
      //   })
      // ).subscribe();
      this.cvService.deleteCvById(cv.id).subscribe({
        next: () => this.router.navigate([APP_ROUTES.cv]),
        error: (e) => console.log(e)
      });
    }
}
