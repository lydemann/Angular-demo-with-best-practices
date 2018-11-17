/* tslint:disable:no-unused-variable */
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { appRouterModule, completedTodoPath } from '@app/app.routes';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { InvalidDateValidatorDirective } from '@app/shared/invalid-date.directive';
import { TODOItem } from '@app/shared/models/todo-item';
import { SpinnerModule } from '@app/shared/spinner/spinner.module';
import { TodoItemListRowComponent } from '@app/shared/todo-item-list-row/todo-item-list-row.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { AddTodoComponent } from '@app/todo-list/add-todo/add-todo.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

describe('TodoListCompletedComponent', () => {
  let component: TodoListCompletedComponent;
  let fixture: ComponentFixture<TodoListCompletedComponent>;

  beforeEach(async(() => {
    const todo1 = new TODOItem('Buy milk', 'Remember to buy milk');
    todo1.completed = true;
    const todoList = [todo1, new TODOItem('Buy flowers', 'Remember to buy flowers')];

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TodoListComponent,
        TodoItemListRowComponent,
        FooterComponent,
        AddTodoComponent,
        TodoListCompletedComponent,
        InvalidDateValidatorDirective
      ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot(),
        SpinnerModule,
        FormsModule,
        appRouterModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: completedTodoPath },
        {
          provide: TodoListService,
          useValue: {
            todoList: todoList
          }
        }
      ]
    }).compileComponents();
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
