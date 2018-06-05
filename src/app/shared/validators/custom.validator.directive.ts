import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn
} from '@angular/forms';

export class CustomValidator {
  constructor(public expression: () => boolean, public validatorName: string) {}
}

export function customValidatorFnFactory(
  customValidator: CustomValidator
): ValidatorFn {
  return function(control: AbstractControl) {
    const errorObj = {};
    errorObj[customValidator.validatorName] = true;
    return customValidator.expression() ? null : errorObj;
  };
}

@Directive({
  selector: '[appCustomValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true
    }
  ]
})
export class CustomValidatorDirective implements Validator {
  private _customValidator: CustomValidator;
  public get appCustomValidator(): CustomValidator {
    return this._customValidator;
  }

  @Input()
  public set appCustomValidator(customValidator: CustomValidator) {
    this._customValidator = customValidator;
    if (this._onChange) {
      this._onChange();
    }
  }

  private _onChange: () => void;

  constructor() {}

  public validate(control: AbstractControl): { [key: string]: any } {
    return customValidatorFnFactory(this.appCustomValidator)(control);
  }
  public registerOnValidatorChange?(fn: () => void): void {
    this._onChange = fn;
  }
}
