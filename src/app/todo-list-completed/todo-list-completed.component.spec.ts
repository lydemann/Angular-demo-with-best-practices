/* tslint:disable:no-unused-variable */
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { completedTodoPath } from '@app/app.routes';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';

describe('TodoListCompletedComponent', () => {
  let component: TodoListCompletedComponent;
  let fixture: ComponentFixture<TodoListCompletedComponent>;

  beforeEach(async(() => {
    const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
    todo1.completed = true;
    const todoList = [todo1];

    TestBed.configureTestingModule({
      declarations: [TodoListCompletedComponent],
      imports: [],
      providers: [
        { provide: APP_BASE_HREF, useValue: completedTodoPath },
        {
          provide: TodoListService,
          useValue: {
            completedTodoList$: of(todoList)
          }
        }
      ]
    })
      .overrideTemplate(TodoListCompletedComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one completed TODO item', (done) => {
    component.completedTodoList$.pipe(first()).subscribe((todoList) => {
      expect(todoList.length).toBe(1);
      done();
    });
  });
});
