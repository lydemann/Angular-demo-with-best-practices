import { of } from 'rxjs';
import { delay, first } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListService } from '@app/core/todo-list/todo-list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  private editingIndex = -1;

  public isLoading = false;

  private _currentTODO: TODOItem = new TODOItem('', '');
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

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {}

  save(form: NgForm) {
    if (!form.valid) {
      console.log('Invalid form!');
      // TODO: display form errors
      return;
    }
    this.isLoading = true;
    of(null)
      .pipe(
        delay(2000),
        first()
      )
      .subscribe(() => {

        this.isLoading = false;
        const currentTODOClone = Object.assign({}, this.currentTODO);
        if (this.isEditing()) {
          this.todoListService.todoList[this.editingIndex] = currentTODOClone;
          this.setAdding();
        } else {
          this.todoListService.todoList.push(currentTODOClone);
          this.currentTODO = new TODOItem('', '');
        }
        form.resetForm();
      });
  }

  private setAdding() {
    this.editingIndex = -1;
  }

  private isEditing() {
    return this.editingIndex !== -1;
  }
}
