import { appRouterModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FooterComponent } from './footer/footer.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CoreModule } from './core/core.module';
import { TodoListCompletedComponent } from './todo-list-completed/todo-list-completed.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent,
    AddTodoComponent,
    TodoListCompletedComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
