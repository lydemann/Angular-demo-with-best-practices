import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule],
  declarations: [TodoListCompletedComponent]
})
export class TodoListCompletedModule {}
