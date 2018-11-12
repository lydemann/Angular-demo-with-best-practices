import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from '@app/todo-list/todo-list.component';
import { TodoListCompletedComponent } from '@app/todo-list-completed/todo-list-completed.component';

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
        component: TodoListCompletedComponent
    },
];

export const appRouterModule = RouterModule.forRoot(appRoutes);
