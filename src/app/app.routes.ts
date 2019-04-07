import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '@app/todo-list/todo-list.component';

export const rootPath = '';
export const completedTodoPath = 'completed-todos';

const appRoutes: Routes = [
  {
    path: rootPath,
    component: TodoListComponent,
    pathMatch: 'full'
  },
  {
    path: completedTodoPath,
    loadChildren: './todo-list-completed/todo-list-completed.module#TodoListCompletedModule'
  }
];

export const appRouterModule = RouterModule.forRoot(appRoutes);
