import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { NgModule } from '@angular/core';
import { SpinnerOverlayWrapperComponent } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';

@NgModule({
    imports: [SpinnerModule],
    declarations: [SpinnerOverlayWrapperComponent],
    exports: [SpinnerOverlayWrapperComponent]
})
export class SpinnerOverlayWrapperModule {
}
