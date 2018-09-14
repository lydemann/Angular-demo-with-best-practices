import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvalidDateValidatorDirective } from '@app/shared/invalid-date.directive';
import { SpinnerOverlayWrapperModule } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.module';
import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule
  ],
  declarations: [
    InvalidDateValidatorDirective
  ],
  exports: [
    InvalidDateValidatorDirective,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule]
})
export class SharedModule { }
