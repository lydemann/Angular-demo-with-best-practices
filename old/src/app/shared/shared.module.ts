import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsListModule } from '@app/shared/cards-list/cards-list.module';
import { InvalidDateValidatorDirective } from '@app/shared/invalid-date.directive';
import { SpinnerOverlayWrapperModule } from '@app/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.module';
import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { TranslateModule } from '@ngx-translate/core';
import { TodoItemComponent } from '@app/shared/todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule,
    CardsListModule
  ],
  declarations: [InvalidDateValidatorDirective, TodoItemComponent],
  exports: [
    InvalidDateValidatorDirective,
    SpinnerModule,
    SpinnerOverlayWrapperModule,
    TranslateModule,
    CardsListModule,
    TodoItemComponent
  ]
})
export class SharedModule {}
