import { Component, inject, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, Subject, Subscription, takeUntil, timeout } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
@Component({
    selector: 'app-test-observable',
    templateUrl: './test-observable.component.html',
    styleUrl: './test-observable.component.css',
    standalone: true,
    imports: [AsyncPipe],
})
export class TestObservableComponent implements OnDestroy {
  // C'est une variable tmathl observable d'entiers
  // C'est le flux
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  subscription: Subscription = new Subscription();
  signalI9oulWA9techNunsubscribiw = new Subject();
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
    this.subscription.add(this.observable$.subscribe({
      next: (val) => {
        console.log(val);
      },
    }));
    // Je suis un observateur
    // ta9yida okhra
    // setTimeout(() => {
    // 5 4 3 2 1
    this.observable$
      .pipe(
        map((dataJdida) => dataJdida * 3),
        // 15 12 9 6 3
        filter(data => data % 2 === 0),
        // 12 6
        takeUntil(this.signalI9oulWA9techNunsubscribiw),
        // A partir de la version 16 de Angular
        takeUntilDestroyed()
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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.signalI9oulWA9techNunsubscribiw.next('elli iji el mohem unsbscibi');
    this.signalI9oulWA9techNunsubscribiw.complete();
  }
}
