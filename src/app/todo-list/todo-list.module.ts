import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListEffects } from '@app/core/todo-list/redux-api/todo-list.effects';
import { todoListReducers } from '@app/core/todo-list/redux-api/todo-list.reducers';
import { TodoListSelector } from '@app/core/todo-list/redux-api/todo-list.selector';
import { SharedModule } from '@app/shared/shared.module';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddTodoModule } from './add-todo/add-todo.module';
import { DuedateTodayCountPipe } from './duedate-today-count.pipe';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    AddTodoModule,
    StoreModule.forFeature('todoList', todoListReducers),
    EffectsModule.forFeature([TodoListEffects])
  ],
  declarations: [TodoListComponent, DuedateTodayCountPipe],
  providers: [TodoListSelector]
})
export class TodoListModule {}
