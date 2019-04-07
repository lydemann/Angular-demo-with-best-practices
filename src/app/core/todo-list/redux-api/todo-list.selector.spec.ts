import { TODOItem } from '@app/shared/models/todo-item';
import { Store } from '@ngrx/store';
import { TodoListState } from './todo-list.model';
import { TodoListSelector, todoListSelectorFn } from './todo-list.selector';

describe('TodoListSelector', () => {
  describe('getTodoList', () => {
    it('should return the todoList', () => {
      const todos = [new TODOItem('todo1', 'todo1')];

      const todoListState = {
        todos: todos,
        isLoading: true
      } as TodoListState;

      expect(todoListSelectorFn.projector(todoListState)).toEqual(todos);
    });

    it('should return call the todoListSelectorFn', () => {
      const store = jasmine.createSpyObj<Store<TodoListState>>('store', ['select']);

      const todoListSelector = new TodoListSelector(store);
      todoListSelector.getTodoList$();

      expect(store.select).toHaveBeenCalledWith(todoListSelectorFn);
    });
  });
});
