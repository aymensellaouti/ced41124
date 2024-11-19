import { Component, inject } from '@angular/core';
import { Observable, retry, catchError, of, distinctUntilChanged } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { APP_ROUTES } from '../../config/app-routes.config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrl: './master-details.component.css',
})
export class MasterDetailsComponent {
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  router = inject(Router);
  acr = inject(ActivatedRoute);
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      count: 4,
      delay: 3000,
    }),
    catchError((e) => {
      this.toastr.error(
        `Attention, les données sont fake merci de contacter l'admin`
      );
      return of(this.cvService.getFakeCvs());
    })
  );
  constructor() {
    this.cvService.selectCv$
    .pipe(
      distinctUntilChanged(),
      takeUntilDestroyed()

    )
    .subscribe(
      (cv) => this.router.navigate([cv.id], { relativeTo: this.acr})
    )
  }
}
