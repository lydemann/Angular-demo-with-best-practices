/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TODOItem } from '@app/shared/models/todo-item';

describe('Service: TodoList', () => {
  let todoListService: TodoListService;
  const httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('httpClient', ['get']);
  httpClientSpy.get.and.returnValue(of([new TODOItem('Buy Milk', 'Lala')]));
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListService,
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }]
    });
  });


  beforeEach(inject([TodoListService], (service: TodoListService) => {
    todoListService = service;
  }));

  it('should be defined', () => {
    expect(todoListService).toBeTruthy();
  });

  it('should make a http get request', () => {

    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(todoListService.todoList.length).toBe(1);
  });
});
