import { Component, Input, computed, input } from '@angular/core';

@Component({
  selector: 'app-is-even',
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css',
})
export class IsEvenComponent {
  @Input({ required: true })
  counter = 0;
  isEven = ! (this.counter % 2);

}
