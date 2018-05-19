import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidDateValidatorDirective } from './invalid-date.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InvalidDateValidatorDirective,
],
  exports: [InvalidDateValidatorDirective]
})
export class SharedModule { }
