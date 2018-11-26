import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoItemCardComponent } from './todo-item-card.component';

@Component({
  selector: 'app-todo-item-card',
  template: ''
})
// tslint:disable-next-line:component-class-suffix
export class TodoItemCardComponentMock implements OnInit, TodoItemCardComponent {
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
