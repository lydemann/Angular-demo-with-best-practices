import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerOverlayComponent } from '@app/core/spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayService } from '@app/core/spinner-overlay/spinner-overlay.service';
import { SpinnerModule } from '@shared-lib/spinner/spinner.module';

@NgModule({
  imports: [CommonModule, SpinnerModule],
  declarations: [SpinnerOverlayComponent],
  entryComponents: [SpinnerOverlayComponent],
  providers: [SpinnerOverlayService],
  exports: []
})
export class SpinnerOverlayModule {}
