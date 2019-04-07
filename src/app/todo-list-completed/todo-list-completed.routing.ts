import { RouterModule, Routes } from '@angular/router';
import { TodoListCompletedComponent } from './todo-list-completed.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListCompletedComponent
  }
];

export const TodoListCompletedRoutes = RouterModule.forChild(routes);
