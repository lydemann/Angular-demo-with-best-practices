/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { AppModule } from '@app/app.module';
import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { TodoItemComponent } from '@app/todo-item/todo-item.component';
import { FooterComponent } from '@app/footer/footer.component';
import { AddTodoComponent } from '@app/add-todo/add-todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { appRouterModule, completedTodoPath } from '@app/app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';

describe('TodoListCompletedComponent', () => {
  let component: TodoListCompletedComponent;
  let fixture: ComponentFixture<TodoListCompletedComponent>;

  beforeEach(async(() => {

    const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
    todo1.completed = true;
    const todoList = [
      todo1,
      new TODOItem('Buy flowers', 'Remember to buy flowers'),
    ];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TodoListComponent,
        TodoItemComponent,
        FooterComponent,
        AddTodoComponent,
        TodoListCompletedComponent,
    ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        appRouterModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : completedTodoPath },
        {
          provide: TodoListService,
          useValue: {
            todoList: todoList
          }
        }
      ]
    })
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

  it('should have one completed TODO item', () => {
    expect(component.todoList.length).toBe(1);
  });
});
