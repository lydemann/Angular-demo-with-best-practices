import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvalidDateValidatorDirective } from '@app/shared/invalid-date.directive';
import { SpinnerOverlayWrapperModule } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.module';
import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { TodoItemComponent } from '@app/shared/todo-item/todo-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { AppMaterialModule } from './app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule,
    AppMaterialModule
  ],
  declarations: [InvalidDateValidatorDirective, TodoItemComponent],
  exports: [
    InvalidDateValidatorDirective,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule,
    TodoItemComponent,
    AppMaterialModule
  ]
})
export class SharedModule {}
