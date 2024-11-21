import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { catchError, delay, Observable, of, retry } from 'rxjs';
import { NgIf, AsyncPipe, UpperCasePipe, DatePipe } from '@angular/common';
import { CvListComponent } from '../cv-list/cv-list.component';
import { CvCArdComponent } from '../cv-card/cv-card.component';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.css',
    standalone: true,
    imports: [
        NgIf,
        CvListComponent,
        CvCArdComponent,
        EmbaucheComponent,
        AsyncPipe,
        UpperCasePipe,
        DatePipe,
    ],
})
export class CvComponent {
  today = new Date();
  cvService = inject(CvService);
  selectedCv$: Observable<Cv> = this.cvService.selectCv$ ;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  /**
   * Le flux des cvs
   */
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      count: 4,
      delay: 3000
    }),
    catchError((e) => {
      this.toastr.error(`Attention, les données sont fake merci de contacter l'admin`)
      return of(this.cvService.getFakeCvs())
    })
  )
  constructor() {
    this.toastr.info('Bienvenu dans notre cvTech');
    // V1
    // this.cvService.selectCv$.subscribe({
    //   next: (cv) => this.selectedCv = cv
    // })
    // this.cvService.getCvs().subscribe({
    //   next: (cvs) => {
    //     this.cvs = cvs;
    //   },
    //   error: (e) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`Attention, les données sont fake merci de contacter l'admin`)
    //   },
    // })
  }

}
