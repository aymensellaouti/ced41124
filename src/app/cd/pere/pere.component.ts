import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  ViewChild,
} from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FilsComponent } from "../fils/fils.component";

@Component({
    selector: "app-pere",
    templateUrl: "./pere.component.html",
    styleUrl: "./pere.component.css",
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        FilsComponent,
    ],
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
