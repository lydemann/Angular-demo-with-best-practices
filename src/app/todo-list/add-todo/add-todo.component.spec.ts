import { NO_ERRORS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { SpyHelper } from '@app/helpers/spy-helper';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AddTodoComponent } from './add-todo.component';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTodoComponent],
      imports: [FormsModule, TranslateModule.forRoot()],
      providers: [SpyHelper.provideMagicalMock(TodoListService)],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
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
    todoListServiceMock.updateTodo.and.returnValue(of([]));

    // Act
    component.currentTODO = todoList[0];
    const form = new NgForm([], []);
    component.save(form);

    // Assert
    expect(todoListServiceMock.updateTodo).toHaveBeenCalledWith(component.currentTODO);
  });

  it('should add new todo item when todo item is not in todo list', () => {
    // Arrange
    const newTodo = { id: 'lala1', title: 'Buy Milk', description: 'Remember to buy milk' };

    const todoList = [
      { id: 'task1', title: 'Buy Milk', description: 'Remember to buy milk' },
      { id: 'task2', title: 'Go to the gym', description: 'Remember to work out' }
    ];
    (todoListServiceMock as any).todoList = todoList;
    todoListServiceMock.addTodo.and.returnValue(of([]));

    // Act
    component.currentTODO = newTodo;
    const form = new NgForm([], []);

    component.save(form);

    // Assert
    expect(todoListServiceMock.addTodo).toHaveBeenCalledWith(newTodo);
  });
});
