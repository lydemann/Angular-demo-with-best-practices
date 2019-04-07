/* tslint:disable:no-unused-variable */

import { HttpClient } from '@angular/common/http';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { of } from 'rxjs';

describe('Service: TodoList', () => {
  let todoListService: TodoListService;
  const httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('httpClient', ['get']);
  httpClientSpy.get.and.returnValue(of([new TODOItem('Buy Milk', 'Lala')]));
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoListService,
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });
  });

  beforeEach(inject([TodoListService], (service: TodoListService) => {
    todoListService = service;
  }));

  it('should be defined', () => {
    expect(todoListService).toBeTruthy();
  });

  it('should make a http get request', fakeAsync(() => {
    todoListService.getTodos().subscribe();

    tick(500);
    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(todoListService.todoList.length).toBe(1);
  }));
});
