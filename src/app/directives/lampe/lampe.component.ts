import { Component } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrl: './lampe.component.css'
})
export class LampeComponent {
  isOn = false;

  interrupteur() {
    this.isOn = !this.isOn;
  }
}
