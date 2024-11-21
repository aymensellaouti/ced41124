import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-pere",
  templateUrl: "./pere.component.html",
  styleUrl: "./pere.component.css",
})
export class PereComponent {
changeUser(newName: string) {
  this.user =  {
    ...this.user,
    name: newName
  }
}

  constructor() {}
  user: Person = {
    name: "sellaouti",
    weight: 82,
    height: 1.87,
  };
  hobby = "Football";
}

export class Person {
  constructor(
    public name: string = "",
    public weight: number = 0,
    public height: number = 0
  ) {}
}
