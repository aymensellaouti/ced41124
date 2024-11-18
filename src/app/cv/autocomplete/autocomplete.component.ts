import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime, Observable } from "rxjs";


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
  form!: FormGroup;
  // cvs$!: Observable<Cv[]>;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({ name: new FormControl() });
    const nameInput = this.form.controls['name'];
    nameInput.valueChanges
    .pipe(debounceTime(500))
    .subscribe({
      next: () => console.log(nameInput.value)

    })
  }
}
