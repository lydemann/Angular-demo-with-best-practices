import { TODOItem } from '@app/shared/models/todo-item';

export interface TodoListState {
  todos: TODOItem[];
  errors?: Error;
  isLoading: boolean;
  editTodoItemIdx?: number;
}
