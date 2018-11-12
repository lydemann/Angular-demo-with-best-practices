import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODOItem } from '@app/shared/models/todo-item';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TodoListService {

    private _todoList: TODOItem[] = [];

    public get todoList(): TODOItem[] {
        return this._todoList;
    }

    private todoListUrl = '//localhost:8080/todo-list';

    constructor(httpClient: HttpClient) {
        httpClient.get<Array<TODOItem>>(this.todoListUrl).subscribe(data => {
            this._todoList = data;
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
