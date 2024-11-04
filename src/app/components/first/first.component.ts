import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
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
