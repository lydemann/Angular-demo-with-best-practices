/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoItemComponent } from '@app/todo-item/todo-item.component';
import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { FooterComponent } from '@app/footer/footer.component';
import { AddTodoComponent } from '@app/add-todo/add-todo.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@app/core/core.module';
import { appRouterModule, rootPath } from '@app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { TodoListService } from '@app/core/todo-list/todo-list.service';
import { TODOItem } from '@app/shared/models/todo-item';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async(() => {
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
        {provide: APP_BASE_HREF, useValue : rootPath },
        {
          provide: TodoListService,
          useValue: {todoList: [new TODOItem('Buy milk', 'Remember to buy milk')]}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
