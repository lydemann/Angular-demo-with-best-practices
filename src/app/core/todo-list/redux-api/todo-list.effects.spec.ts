import { TestBed } from '@angular/core/testing';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { LoadTodoList, TodoItemsLoaded, TodoItemsLoadFailed } from './todo-list.actions';
import { TodoListEffects } from './todo-list.effects';

describe('TodoListEffects', () => {
  let actions: Observable<any>;

  let effects: TodoListEffects;
  let todoListService: jasmine.SpyObj<TodoListService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoListEffects,
        provideMockActions(() => actions),
        {
          provide: TodoListService,
          useValue: {
            getTodos: jasmine.createSpy()
          }
        }
      ]
    });

    effects = TestBed.get(TodoListEffects);
    todoListService = TestBed.get(TodoListService);
  });

  describe('loadTodoList', () => {
    it('should return a stream with todo list loaded action', () => {
      const todoList: TODOItem[] = [{ title: '', id: '1', description: '' }];
      const action = new LoadTodoList();
      const outcome = new TodoItemsLoaded(todoList);

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: todoList });
      todoListService.getTodos.and.returnValue(response);

      const expected = cold('--b', { b: outcome });
      expect(effects.loadTodoList$).toBeObservable(expected);
    });

    it('should fail and return an action with the error', () => {
      const action = new LoadTodoList();
      const error = new Error('some error') as any;
      const outcome = new TodoItemsLoadFailed(error);

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      todoListService.getTodos.and.returnValue(response);

      const expected = cold('--(b|)', { b: outcome });
      expect(effects.loadTodoList$).toBeObservable(expected);
    });
  });
});
