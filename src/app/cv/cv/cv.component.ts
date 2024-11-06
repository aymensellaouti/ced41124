import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

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
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 42),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', '      ', 5),
    new Cv(
      3,
      'Hedhli',
      'sana',
      'Dev',
      '55555',
      'rotating_card_profile.png',
      20
    ),
  ];
  constructor() {
    this.toastr.info('Bienvenu dans notre cvTech');
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
