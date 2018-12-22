import { NgModule } from '@angular/core';
import { SpinnerOverlayWrapperComponent } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { SpinnerModule } from '@shared-lib/spinner/spinner.module';

@NgModule({
  imports: [SpinnerModule],
  declarations: [SpinnerOverlayWrapperComponent],
  exports: [SpinnerOverlayWrapperComponent]
})
export class SpinnerOverlayWrapperModule {}
