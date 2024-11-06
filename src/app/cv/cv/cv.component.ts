import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
  constructor() {
    this.toastr.info('Bienvenu dans notre cvTech');
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
