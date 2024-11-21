import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, Observable, switchMap } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NgIf, AsyncPipe } from "@angular/common";
import { CvListComponent } from "../cv-list/cv-list.component";


@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf,
        CvListComponent,
        AsyncPipe,
    ],
})
export class AutocompleteComponent {
  cvService = inject(CvService);
  router = inject(Router);
  form: FormGroup = new FormGroup({ name: new FormControl() });
  cvs$: Observable<Cv[]> = this.nameInput.valueChanges.pipe(
    //'val de linput'
    debounceTime(500),
    // la valeur stable pendant 500 ms
    distinctUntilChanged(),
    // la valeur stable pendant 500 ms différente de la dernière valeure reçu
    switchMap((name) => this.cvService.getCvsByName(name)),
  );

  constructor() {
    this.cvService.selectCv$
    .pipe(
      distinctUntilChanged(),
      takeUntilDestroyed()

    )
    .subscribe(
      (cv) => this.router.navigate([`/${APP_ROUTES.cv}`, cv.id])
    )
  }

  ngOnInit(): void {
    // this.form;
    // const nameInput =
    // nameInput.valueChanges.pipe(debounceTime(500)).subscribe({
    //   next: () => console.log(nameInput.value),
    // });
  }

  get nameInput(): FormControl {
    return this.form.controls['name'] as FormControl;
  }
}
