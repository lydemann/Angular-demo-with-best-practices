import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { AddTodoModule } from './add-todo/add-todo.module';

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule, AddTodoModule],
  declarations: [TodoListComponent]
})
export class TodoListModule {}
