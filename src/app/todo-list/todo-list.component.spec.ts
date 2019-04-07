/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoItemListRowComponentMock } from '@app/shared/todo-item-list-row/todo-item-list-row.component.mock';
import { AddTodoComponentMock } from '@app/todo-list/add-todo/add-todo.component.mock';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { of } from 'rxjs';
import { TodoListActions } from './redux-api/todo-list.actions';
import { TodoListSelector } from './redux-api/todo-list.selector';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
    todo1.completed = true;
    const todoList = [todo1, new TODOItem('Buy flowers', 'Remember to buy flowers')];

    TestBed.configureTestingModule({
      declarations: [TodoListComponent, TodoItemListRowComponentMock, AddTodoComponentMock],
      imports: [],
      providers: [
        {
          provide: TodoListService,
          useValue: { todoList: todoList }
        },
        {
          provide: TodoListSelector,
          useValue: {
            getTodoList: () => of([])
          }
        },
        {
          provide: TodoListActions,
          useValue: {
            loadTodoList: () => {}
          }
        }
      ]
    })
      .overrideTemplate(TodoListComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
