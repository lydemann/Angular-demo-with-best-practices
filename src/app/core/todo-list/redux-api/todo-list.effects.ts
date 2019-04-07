import { Injectable } from '@angular/core';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { TodoItemsLoaded, TodoItemsLoadFailed, TodoListActionTypes } from './todo-list.actions';

@Injectable()
export class TodoListEffects {
  constructor(private actions$: Actions, private todoListService: TodoListService) {}

  @Effect()
  loadTodoList$ = this.actions$.pipe(
    ofType(TodoListActionTypes.LoadTodoList),
    exhaustMap(() => this.todoListService.getTodos()),
    map((todoList) => new TodoItemsLoaded(todoList)),
    catchError((error: Error) => of(new TodoItemsLoadFailed(error)))
  );
}
