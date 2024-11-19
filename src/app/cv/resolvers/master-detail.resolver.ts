import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { retry, catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const masterDetailResolver: ResolveFn<Cv[]> = (route, state) => {
  const cvService = inject(CvService);
  const toastr = inject(ToastrService);
  return  cvService.getCvs().pipe(
    retry({
      count: 4,
      delay: 3000,
    }),
    catchError((e) => {
      toastr.error(
        `Attention, les données sont fake merci de contacter l'admin`
      );
      return of(cvService.getFakeCvs());
    })
  );;
};
