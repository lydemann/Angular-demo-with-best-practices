import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { first } from 'rxjs/operators';

@Injectable()
export class AddTodoService {
  private editingIndex = -1;
  private todoBeingEdited: TODOItem;
  public isLoading = false;

  private _currentTODO: TODOItem = new TODOItem('', '');
  public get currentTODO(): TODOItem {
    return this._currentTODO;
  }
  public set currentTODO(value: TODOItem) {
    this._currentTODO = Object.assign({}, value);
    this.editingIndex = this.todoListService.todoList.findIndex((todo) => todo.id === value.id);
  }

  constructor(private todoListService: TodoListService) { }

  public save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }
    this.isLoading = true;

    if (this.isEditing()) {
      this.todoListService
        .updateTodo(this.currentTODO)
        .pipe(first())
        .subscribe(() => {
          this.isLoading = false;
          const currentTODOClone = Object.assign({}, this.currentTODO);
          this.todoListService.todoList[this.editingIndex] = currentTODOClone;
          this.setAdding();
          form.resetForm();
        });
    } else {
      this.todoListService
        .addTodo(this.currentTODO)
        .pipe(first())
        .subscribe(() => {
          this.isLoading = false;
          const currentTODOClone = Object.assign({}, this.currentTODO);
          this.todoListService.todoList.push(currentTODOClone);
          this.currentTODO = new TODOItem('', '');
          form.resetForm();
        });
    }
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
