import { NO_ERRORS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { createMagicalMock, provideMagicalMock } from '@app/helpers/spy-helper';
import { AddTodoComponent } from './add-todo.component';
import { AddTodoService } from './add-todo.service';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  const addTodoServiceStub = createMagicalMock(AddTodoService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      imports: [FormsModule, TranslateModule.forRoot()],
      providers: [provideMagicalMock(TodoListService)],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideProvider(AddTodoService, { useValue: addTodoServiceStub })
      .compileComponents();
  }));

  let todoListServiceMock: jasmine.SpyObj<TodoListService>;
  beforeEach(() => {
    todoListServiceMock = TestBed.get(TodoListService);

    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update todo item when todo item is in todo list', () => {
    // Arrange
    const todoList = [
      { id: 'task1', title: 'Buy Milk', description: 'Remember to buy milk' },
      { id: 'task2', title: 'Go to the gym', description: 'Remember to work out' }
    ];
    (todoListServiceMock as any).todoList = todoList;
    todoListServiceMock.editTodo.and.returnValue(of([]));

    // Act
    component.currentTODO = todoList[0];
    const form = new NgForm([], []);
    component.save(form);

    // Assert
    expect(addTodoServiceStub.save).toHaveBeenCalledWith(form);
  });

  it('should add new todo item when todo item is not in todo list', () => {
    // Arrange
    const newTodo = { id: 'lala1', title: 'Buy Milk', description: 'Remember to buy milk' };

    const todoList = [
      { id: 'task1', title: 'Buy Milk', description: 'Remember to buy milk' },
      { id: 'task2', title: 'Go to the gym', description: 'Remember to work out' }
    ];
    (todoListServiceMock as any).todoList = todoList;

    // Act
    component.currentTODO = newTodo;
    const form = new NgForm([], []);

    component.save(form);

    // Assert
    expect(addTodoServiceStub.save).toHaveBeenCalledWith(form);
  });
});
