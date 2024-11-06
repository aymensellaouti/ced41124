import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css',
})
export class TestObservableComponent {
  // C'est une variable tmathl observable d'entiers
  // C'est le flux
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    // 5 4 3 2 1
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    // Je suis un observateur
    // ta9yida
    this.observable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    });
    // Je suis un observateur
    // ta9yida okhra
    // setTimeout(() => {
    // 5 4 3 2 1
    this.observable$
      .pipe(
        map((dataJdida) => dataJdida * 3),
        // 15 12 9 6 3
        filter(data => data % 2 === 0)
        // 12 6
      )
      .subscribe({
        next: (data) => {
          this.toastr.success('' + data);
        },
        complete: () => {
          this.toastr.error('BOOOOOOMMMMM !!!!!');
        },
      });
    // },3000);
  }
}
