/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { createMagicalMock } from '@app/helpers/spy-helper';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListActions } from './redux-api/todo-list.actions';
import { TodoListSelector } from './redux-api/todo-list.selector';

describe('Service: TodoList', () => {
  let todoListService: TodoListService;
  const httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('httpClient', ['get']);
  const todoList$ = of([new TODOItem('Buy Milk', 'Lala')]);
  httpClientSpy.get.and.returnValue(todoList$);

  const todoListSelectorStub = createMagicalMock(TodoListSelector);
  todoListSelectorStub.getTodoList$.and.returnValue(todoList$);
  const todoListActionsStub = createMagicalMock(TodoListActions);

  beforeEach(() => {
    todoListService = new TodoListService(httpClientSpy, todoListSelectorStub, todoListActionsStub);
  });

  it('should be defined', () => {
    expect(todoListService).toBeTruthy();
  });

  it('should make a http get request', (done) => {
    todoListService.getTodos().subscribe();

    todoListService.todoList$.pipe(first()).subscribe((todoList) => {
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(todoList.length).toBe(1);
      done();
    });
  });
});
