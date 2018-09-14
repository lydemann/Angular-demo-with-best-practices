import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinnerOverlayModule } from '@app/core/spinner-overlay/spinner-overlay.module';
import { TodoListService } from '@app/core/todo-list/todo-list.service';

@NgModule({
  imports: [
    OverlayModule,
    SpinnerOverlayModule
  ],
  declarations: [],
  providers: [TodoListService]
})
export class CoreModule { }
