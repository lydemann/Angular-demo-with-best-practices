import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { SpinnerOverlayModule } from '@app/core/spinner-overlay/spinner-overlay.module';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { StateModule } from './store/store.module';

@NgModule({
  imports: [OverlayModule, SpinnerOverlayModule, StateModule],
  declarations: [],
  providers: [TodoListService]
})
export class CoreModule {}
