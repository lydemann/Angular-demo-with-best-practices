import { EventEmitter, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TODOItem } from '@app/shared/models/todo-item';

@Injectable()
export class AddTodoService {
  public get currentTODO(): TODOItem {
    return this._currentTODO;
  }
  public set currentTODO(value: TODOItem) {
    this._currentTODO = { ...value };
  }

  public todoItemEdit = new EventEmitter<TODOItem>();
  public todoItemCreate = new EventEmitter<TODOItem>();
  private _currentTODO: TODOItem = new TODOItem('', '');

  public save(form: NgForm) {
    if (!form.valid) {
      // tslint:disable-next-line:no-console
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const todoToSave = {
      ...this.currentTODO
    };

    if (todoToSave.id) {
      this.todoItemEdit.next(todoToSave);
      form.resetForm();
    } else {
      this.todoItemCreate.next(todoToSave);
      form.resetForm();
    }
  }
}
