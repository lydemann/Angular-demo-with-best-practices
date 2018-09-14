import { Component, OnInit } from '@angular/core';
import { TodoListService } from '@app/core/todo-list/todo-list.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html',
  styleUrls: ['./todo-list-completed.component.css']
})
export class TodoListCompletedComponent {

  constructor(private todoListService: TodoListService) { }

  get todoList() {
    return this.todoListService.todoList.filter(todo => todo.completed);
  }
}
