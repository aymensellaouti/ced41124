import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrl: './first.component.css',
    standalone: true,
    imports: [SecondComponent]
})
export class FirstComponent {
  name = 'test';

  isHidden = false;

  message = '';

  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(message: string) {
    this.message = message;
  }
}
