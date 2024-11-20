import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../services/cv.service";
import { map, of } from "rxjs";

export const uniqueCinValidator = (cvService: CvService): AsyncValidatorFn => {
  return (control: AbstractControl) => {
    console.log('Call uniqueCinValidator');

    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      map( cvs => cvs.length ? {uniqueCinError: 'Le cin doit être unique'}: null)
    )
  }
}
