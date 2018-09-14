import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListService {

    public todoList: TODOItem[] = [];
    private todoListUrl = '//localhost:8080/todo-list';

    constructor(httpClient: HttpClient) {
         httpClient.get<Array<TODOItem>>(this.todoListUrl).subscribe(data => {
            this.todoList = data;
        });
    }

    public addTodo(todo: TODOItem) {
        return of(null).pipe(delay(2000));
    }

    public updateTodo(todo: TODOItem) {
        return of(null).pipe(delay(2000));
    }

    public deleteTodo(id: string) {
        return of(null).pipe(delay(2000));
    }
}
