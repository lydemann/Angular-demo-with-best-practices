import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function invalidDateValidatorFn(): ValidatorFn {
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
  @Input('appInvalidDate') public invalidDate: string;
  public validate(control: AbstractControl): { [key: string]: any } {
    return this.invalidDate ? invalidDateValidatorFn()(control)
      : null;
  }
}
