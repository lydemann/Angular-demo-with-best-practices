import { Store } from '@ngrx/store';
import { LoadTodoList, TodoListActions } from './todo-list.actions';
import { TodoListState } from './todo-list.model';

describe('Todo list actions', () => {
  describe('loadTodoList', () => {
    it('should dispatch load todolist action', () => {
      const expectedAction = new LoadTodoList();
      const store = jasmine.createSpyObj<Store<TodoListState>>('store', ['dispatch']);

      const todoListActions = new TodoListActions(store);
      todoListActions.loadTodoList();

      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
