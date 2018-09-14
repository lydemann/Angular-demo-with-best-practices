import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidDateValidatorDirective } from '@app/shared/invalid-date.directive';
import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { SpinnerOverlayWrapperModule } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    SpinnerOverlayWrapperModule
  ],
  declarations: [
    InvalidDateValidatorDirective,
],
  exports: [InvalidDateValidatorDirective,
  SpinnerModule, SpinnerOverlayWrapperModule]
})
export class SharedModule { }
