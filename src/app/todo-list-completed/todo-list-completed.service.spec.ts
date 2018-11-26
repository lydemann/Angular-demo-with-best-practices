/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { SpyHelper } from '@app/helpers/spy-helper';
import { TodoListCompletedService } from './todo-list-completed.service';

describe('Service: TodoListCompleted', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListCompletedService, SpyHelper.provideMagicalMock(TodoListService)]
    });
  });

  it('should ...', inject([TodoListCompletedService], (service: TodoListCompletedService) => {
    expect(service).toBeTruthy();
  }));
});
