import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { appRouterModule } from '@app/app.routes';
import { CoreModule } from '@app/core/core.module';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { TodoItemListRowComponent } from '@app/shared/todo-item-list-row/todo-item-list-row.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { AddTodoComponent } from '@app/todo-list/add-todo/add-todo.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        TodoListComponent,
        TodoItemListRowComponent,
        FooterComponent,
        AddTodoComponent,
        TodoListCompletedComponent
      ],
      imports: [
        BrowserModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot(),
        FormsModule,
        CoreModule,
        HttpClientModule,
        appRouterModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
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
