import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListEffects } from './todo-list.effects';
import { todoListReducers } from './todo-list.reducers';
import { TodoListSelector } from './todo-list.selector';

@NgModule({
  imports: [
    StoreModule.forFeature('todoList', todoListReducers),
    EffectsModule.forFeature([TodoListEffects])
  ],
  providers: [TodoListSelector]
})
export class TodoListStoreModule {}
