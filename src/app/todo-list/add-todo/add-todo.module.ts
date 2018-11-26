import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { AddTodoPresentationComponent } from './add-todo-presentation/add-todo-presentation.component';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule],
  declarations: [AddTodoComponent, AddTodoPresentationComponent],
  exports: [AddTodoComponent]
})
export class AddTodoModule {}
