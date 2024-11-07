import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  today = new Date();
  cvService = inject(CvService);
  selectedCv$: Observable<Cv> = this.cvService.selectCv$ ;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  cvs: Cv[] = [];
  constructor() {
    this.toastr.info('Bienvenu dans notre cvTech');
    // V1
    // this.cvService.selectCv$.subscribe({
    //   next: (cv) => this.selectedCv = cv
    // })
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`Attention, les données sont fake merci de contacter l'admin`)
      },
    })
  }

}
