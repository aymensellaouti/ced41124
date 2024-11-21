import { Component, inject } from '@angular/core';
import { Observable, retry, catchError, of, distinctUntilChanged } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { APP_ROUTES } from '../../config/app-routes.config';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CvListComponent } from '../cv-list/cv-list.component';

@Component({
    selector: 'app-master-details',
    templateUrl: './master-details.component.html',
    styleUrl: './master-details.component.css',
    standalone: true,
    imports: [CvListComponent, RouterOutlet],
})
export class MasterDetailsComponent {
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  router = inject(Router);
  acr = inject(ActivatedRoute);
  cvs = this.acr.snapshot.data['cvs'];
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
