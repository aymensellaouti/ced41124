import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { HighglightDirective } from '../highglight.directive';
import { RainbowDirective } from '../rainbow.directive';

@Component({
    selector: 'app-lampe',
    templateUrl: './lampe.component.html',
    styleUrl: './lampe.component.css',
    standalone: true,
    imports: [NgClass, HighglightDirective, RainbowDirective]
})
export class LampeComponent {
  isOn = false;

  interrupteur() {
    this.isOn = !this.isOn;
  }
}
