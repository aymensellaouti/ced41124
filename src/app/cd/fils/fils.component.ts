import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Person } from "../pere/pere.component";

@Component({
  selector: "app-fils",
  templateUrl: "./fils.component.html",
  styleUrl: "./fils.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilsComponent {
  @Input({ required: true }) person!: Person;
  @Input({ required: true }) hobby!: string;
}
