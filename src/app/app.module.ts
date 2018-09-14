import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddTodoComponent } from '@app/add-todo/add-todo.component';
import { AppInitService } from '@app/app-init.service';
import { AppComponent } from '@app/app.component';
import { appRouterModule } from '@app/app.routes';
import { CoreModule } from '@app/core/core.module';
import { FooterComponent } from '@app/footer/footer.component';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { SharedModule } from '@app/shared/shared.module';
import { TodoItemComponent } from '@app/todo-item/todo-item.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
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
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
