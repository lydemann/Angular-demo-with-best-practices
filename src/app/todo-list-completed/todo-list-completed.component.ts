import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListCompletedService } from './todo-list-completed.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.css'],
  viewProviders: [TodoListCompletedService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListCompletedComponent {
  constructor(private todoListCompletedService: TodoListCompletedService) {}

  public get todoList() {
    return this.todoListCompletedService.todoList;
  }
}
