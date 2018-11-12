import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { AddTodoComponent } from './add-todo.component';

@NgModule({
  imports: [FormsModule, CommonModule, SharedModule],
  declarations: [AddTodoComponent],
  exports: [AddTodoComponent]
})
export class AddTodoModule {}
