import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css'
})
export class CvListComponent {
  @Input()
  cvs: Cv[] = [];
}
