import { Component } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-test-form',
    templateUrl: './test-form.component.html',
    styleUrl: './test-form.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class TestFormComponent {
  process(form: NgForm) {
    console.log(form);
  }

}
