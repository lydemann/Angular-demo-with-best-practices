import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TodoListActions } from './redux-api/todo-list.actions';
import { TodoListSelector } from './redux-api/todo-list.selector';

@Injectable()
export class TodoListService {
  public isLoading$ = this.todoListSelector.getIsLoading$();

  private _todoList: TODOItem[] = [];

  public get todoList(): TODOItem[] {
    return this._todoList;
  }

  private todoListUrl = '//localhost:8080/api/todo-list';

  constructor(
    private httpClient: HttpClient,
    private todoListSelector: TodoListSelector,
    private todoListActions: TodoListActions
  ) {}

  public getTodos() {
    return this.httpClient.get<TODOItem[]>(this.todoListUrl).pipe(
      tap((data) => {
        this._todoList = data;
      })
    );
  }

  public getTodoList(): Observable<TODOItem[]> {
    return this.todoListSelector.getTodoList$();
  }

  public loadTodoList(): any {
    this.todoListActions.loadTodoList();
  }

  public setTodoItemForEdit(todoItem: TODOItem): any {
    this.todoListActions.setTodoItemForEdit(todoItem);
  }

  public editTodo(todoItem: TODOItem): any {
    this.todoListActions.todoItemUpdated(todoItem);
  }

  public getTodoForEdit$() {
    return this.todoListSelector.getTodoItemForEdit$();
  }

  public addTodo(todo: TODOItem) {
    this.todoListActions.addTodo(todo);
  }

  public deleteTodo(id: string) {
    this.todoListActions.deleteTodo(id);
  }
}
