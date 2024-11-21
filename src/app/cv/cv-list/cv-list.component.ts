import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { NgFor, NgClass } from '@angular/common';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-cv-list',
    templateUrl: './cv-list.component.html',
    styleUrl: './cv-list.component.css',
    standalone: true,
    imports: [NgFor, NgClass, CvItemComponent]
})
export class CvListComponent {
  @Input()
  cvs: Cv[] = [];

  // @Output()
  // forwardCv = new EventEmitter<Cv>();
}
