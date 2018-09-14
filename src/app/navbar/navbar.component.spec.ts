import { appRouterModule } from '@app/app.routes';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from '@app/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { TodoItemComponent } from '@app/todo-item/todo-item.component';
import { AddTodoComponent } from '@app/add-todo/add-todo.component';
import { AppComponent } from '@app/app.component';
import { FooterComponent } from '@app/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core/core.module';
import { HttpClientModule } from '@angular/common/http';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

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
        CoreModule,
        HttpClientModule,
        appRouterModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
