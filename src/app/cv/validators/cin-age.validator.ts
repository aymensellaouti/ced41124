import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const ageCinValidator = (form: AbstractControl): ValidationErrors | null => {
  const cin = form.get('cin')?.value.substring(0,2);
  const age = form.get('age')?.value;
  // console.log({cin, age});

  if (!cin || !age) return null;

  if ((age > 60 && cin <20) || (cin >= 20 && age <= 60)) return null;

  return {'cinAge': `L'age et le cin ne correspondent pas !!!`}

}
