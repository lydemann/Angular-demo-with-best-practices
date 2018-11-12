import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function InvalidDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const date = new Date(control.value);
    const invalidDate = !control.value || date.getMonth === undefined;
    return invalidDate ? { 'invalidDate': { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appInvalidDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: InvalidDateValidatorDirective, multi: true }]
})
export class InvalidDateValidatorDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('appInvalidDate') invalidDate: string;
  validate(control: AbstractControl): { [key: string]: any } {
    return this.invalidDate ? InvalidDateValidator()(control)
      : null;
  }
}
