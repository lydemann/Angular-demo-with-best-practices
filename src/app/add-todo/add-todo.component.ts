import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListService } from '@app/core/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { CustomValidator } from '@app/shared/validators/custom.validator.directive';

export const MAX_DESCRIPTION_LENGTH = 140;
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public get currentTODO(): TODOItem {
    return this._currentTODO;
  }
  @Input()
  public set currentTODO(value: TODOItem) {
    this._currentTODO = Object.assign({}, value);
    this.editingIndex = this.todoListService.todoList.findIndex(
      todo => todo.id === value.id
    );
  }

  private _currentTODO: TODOItem = new TODOItem('', '');
  private editingIndex = -1;
  public getLengthCustomValidator = (value: string) =>
    new CustomValidator(
      () => value.length < MAX_DESCRIPTION_LENGTH,
      'minLengthValidator'
    )
  constructor(private todoListService: TodoListService) {}

  public ngOnInit() {}

  public save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }

    const currentTODOClone = Object.assign({}, this.currentTODO);
    if (this.isEditing()) {
      this.todoListService.todoList[this.editingIndex] = currentTODOClone;
      this.setAdding();
    } else {
      this.todoListService.todoList.push(currentTODOClone);
      this.currentTODO = new TODOItem('', '');
    }
    form.resetForm();
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
