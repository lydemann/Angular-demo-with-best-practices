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
  selector: 'app-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemCardComponent implements OnInit {
  @Input() public todoItem: TODOItem;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter<string>();
  @Output() public todoEdit = new EventEmitter<TODOItem>();

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
