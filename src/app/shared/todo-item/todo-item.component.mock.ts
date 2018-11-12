import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoItemComponent } from '@app/shared/todo-item/todo-item.component';

@Component({
  selector: 'app-todo-item',
  template: ''
})
export class TodoItemComponentMock implements OnInit, TodoItemComponent {

  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public completeClick() {
    this.todoItem.completed = !this.todoItem.completed;
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
