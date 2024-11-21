import { Component, Input, computed, input } from '@angular/core';
import { count } from 'rxjs';

@Component({
    selector: 'app-is-even',
    templateUrl: './is-even.component.html',
    styleUrl: './is-even.component.css',
    standalone: true,
})
export class IsEvenComponent {
  // @Input({ required: true })
  // set counter(newValue: number) {
  //   this.appCounter = newValue;
  //   this.isEven = this.appCounter % 2 === 0;
  // };
  counter = input.required<number>();
  isEven = computed(() => this.counter() % 2 === 0);

}
