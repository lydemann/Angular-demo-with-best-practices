import { GenericAction } from '@app/core/store/generic-action';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListActionTypes } from './todo-list.actions';
import { TodoListInitState, todoListReducers } from './todo-list.reducers';

describe('TodoList reducer', () => {
  describe('default', () => {
    it('should return init state', () => {
      const noopAction = new GenericAction('noop' as TodoListActionTypes);
      const newState = todoListReducers(undefined, noopAction);

      const initState = new TodoListInitState();
      expect(newState).toEqual(initState);
    });
  });

  describe('loadTodoItems', () => {
    it('should return isLoading true', () => {
      const initState = new TodoListInitState();
      const loadTodoItemsAction = new GenericAction(TodoListActionTypes.LoadTodoList);
      const newState = todoListReducers(initState, loadTodoItemsAction);

      expect(newState.isLoading).toBe(true);
    });
  });

  describe('todoItemsLoadFailed', () => {
    it('should return isLoading false and error', () => {
      const initState = new TodoListInitState();
      const error = new Error('http error');
      const loadTodoItemsAction = new GenericAction(TodoListActionTypes.TodoItemsLoadFailed, error);
      const newState = todoListReducers(initState, loadTodoItemsAction);

      expect(newState.isLoading).toBe(false);
      expect(newState.errors).toBe(error);
    });
  });

  describe('todoItemCreatedReducer', () => {
    it('should add new todo to todo list', () => {
      const initState = new TodoListInitState();
      const newTodo = new TODOItem('new todo', 'this is new');
      const loadTodoItemsAction = new GenericAction(TodoListActionTypes.TodoItemCreated, newTodo);
      const newState = todoListReducers(initState, loadTodoItemsAction);

      expect(newState.todos.length).toBe(1);
      expect(newState.todos[0]).toEqual(newTodo);
    });
  });

  describe('todoItemDeletedReducer', () => {
    it('should delete todo from todo list', () => {
      const initState = new TodoListInitState();
      initState.todos = [new TODOItem('todoToDelete', '')];

      expect(initState.todos.length).toBe(1);

      const todoToDelete = 'todoToDelete';
      const loadTodoItemsAction = new GenericAction(
        TodoListActionTypes.TodoItemDeleted,
        todoToDelete
      );
      const newState = todoListReducers(initState, loadTodoItemsAction);

      expect(newState.todos.length).toBe(0);
    });
  });

  describe('todoItemUpdatedReducer', () => {
    it('should update todo item', () => {
      const initState = new TodoListInitState();
      const oldTodoItem = new TODOItem('todoToUpdate', '');
      oldTodoItem.id = 'todoToUpdate';
      initState.todos = [oldTodoItem];

      expect(initState.todos.length).toBe(1);

      const updatedTodo = new TODOItem('todoToUpdate', 'new msg');
      updatedTodo.id = oldTodoItem.id;
      const loadTodoItemsAction = new GenericAction(
        TodoListActionTypes.TodoItemUpdated,
        updatedTodo
      );
      const newState = todoListReducers(initState, loadTodoItemsAction);

      expect(newState.todos[0]).toBe(updatedTodo);
    });
  });

  describe('todoItemCompletedReducer', () => {
    it('should complete given todo item', () => {
      const initState = new TodoListInitState();
      const oldTodoItem = new TODOItem('todoToUpdate', '');
      oldTodoItem.id = 'todoToUpdate';
      oldTodoItem.completed = false;
      initState.todos = [oldTodoItem];

      expect(initState.todos.length).toBe(1);
      expect(initState.todos[0].completed).toBe(false);

      const loadTodoItemsAction = new GenericAction(
        TodoListActionTypes.TodoItemCompleted,
        oldTodoItem.id
      );
      const newState = todoListReducers(initState, loadTodoItemsAction);

      expect(newState.todos[0].completed).toBe(true);
    });
  });
});
