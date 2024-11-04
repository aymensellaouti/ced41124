import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      '12324',
      'rotating_card_profile2.png',
      42
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      'student',
      '4444',
      'rotating_card_profile.png',
      5
    ),
  ];
}
