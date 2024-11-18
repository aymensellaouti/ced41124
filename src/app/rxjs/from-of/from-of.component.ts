import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-from-of',
  templateUrl: './from-of.component.html',
  styleUrl: './from-of.component.css'
})
export class FromOfComponent {
  tab = [1,2,3]
  from$ = from(this.tab);
  of$ = of(this.tab);

  constructor() {
    this.from$.subscribe({
      next: (data) => {
        console.log(`[From] ${data}`);
      },
      complete: () => {
        console.log(`[From] Complete`);

      }
    });
    this.of$.subscribe({
      next: (data) => {
        console.log(`[Of] ${data}`);
      },
      complete: () => {
        console.log(`[Of] Complete`);
      }
    })
  }
}
