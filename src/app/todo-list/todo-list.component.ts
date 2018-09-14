import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  currentTODO: TODOItem = new TODOItem('', '');

  constructor(private todoListService: TodoListService) { }

  get todoList() {
    return this.todoListService.todoList;
  }

  deleteTodo(id: string) {

    const deleteIndex = this.todoListService.todoList.findIndex(todo => todo.id === id);
    this.todoListService.todoList.splice(deleteIndex, 1);
  }

  editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }
}
