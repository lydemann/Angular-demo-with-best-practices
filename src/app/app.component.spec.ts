import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { TodoItemComponent } from '@app/todo-item/todo-item.component';
import { FooterComponent } from '@app/footer/footer.component';
import { AddTodoComponent } from '@app/add-todo/add-todo.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { appRouterModule } from '@app/app.routes';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
