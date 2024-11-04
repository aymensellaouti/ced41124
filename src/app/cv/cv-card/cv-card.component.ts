import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCArdComponent {
  @Input()
  cv: Cv | null = null;
}
