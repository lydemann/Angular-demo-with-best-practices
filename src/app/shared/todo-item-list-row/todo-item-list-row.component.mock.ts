import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoItemListRowComponent } from './todo-item-list-row.component';

@Component({
  selector: 'app-todo-item-list-row',
  template: ''
})
// tslint:disable-next-line:component-class-suffix
export class TodoItemListRowComponentMock implements OnInit, TodoItemListRowComponent {
  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();

  constructor() {}

  public ngOnInit() {}

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
