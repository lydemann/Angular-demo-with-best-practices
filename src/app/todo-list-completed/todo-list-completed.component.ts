import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListService } from '@app/core/todo-list/todo-list.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListCompletedComponent {
  public todoList$ = this.todoListService.getTodoList();

  constructor(private todoListService: TodoListService) {}
}
