import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrl: './first-signal.component.css',
})
export class FirstSignalComponent {

increment(mySignal: WritableSignal<number>) {
 mySignal.update(oldValue => oldValue + 1);
}
decrement(mySignal: WritableSignal<number>) {
 mySignal.update(oldValue => oldValue - 1);
}
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  zz = computed(() => this.z() * 2);
}
