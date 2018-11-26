import { Injectable } from '@angular/core';
import { TodoListService } from '@app/core/todo-list/todo-list.service';

@Injectable()
export class TodoListCompletedService {
  public get todoList() {
    return this.todoListService.todoList.filter((todo) => todo.completed);
  }

  constructor(private todoListService: TodoListService) {}
}
