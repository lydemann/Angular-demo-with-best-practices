import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';

@Component({
  selector: 'app-todo-item-list-row',
  templateUrl: './todo-item-list-row.component.html',
  styleUrls: ['./todo-item-list-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemListRowComponent implements OnInit {
  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter();
  @Output() public todoComplete = new EventEmitter<TODOItem>();

  constructor() {}

  public ngOnInit() {}

  public completeClick() {
    const newTodo = {
      ...this.todoItem,
      completed: !this.todoItem.completed
    };

    this.todoComplete.emit(newTodo);
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }
}
