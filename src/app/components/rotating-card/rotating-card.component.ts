import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-rotating-card',
    templateUrl: './rotating-card.component.html',
    styleUrl: './rotating-card.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
})
export class RotatingCardComponent {
  name = 'Sellaouti';
  firstname = 'Aymen';
  job = 'teacher';
  path = 'rotating_card_profile2.png';
  age = 42;
}
