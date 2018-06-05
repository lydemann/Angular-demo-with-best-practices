import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomValidatorDirective } from '@app/shared/validators/custom.validator.directive';
import { InvalidDateValidatorDirective } from '@app/shared/validators/invalid-date.validator.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InvalidDateValidatorDirective, CustomValidatorDirective],
  exports: [InvalidDateValidatorDirective, CustomValidatorDirective]
})
export class SharedModule {}
